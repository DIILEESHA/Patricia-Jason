import React, { useState, useEffect } from "react";
import { Table, Button, Input, Space, message } from "antd";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const dummyPassword = "pj26";

const AdminDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [rsvpEntries, setRsvpEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch RSVPs
  const fetchRsvps = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "rsvps"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRsvpEntries(data);
    setLoading(false);
  };

  useEffect(() => {
    if (loggedIn) fetchRsvps();
  }, [loggedIn]);

  // Login
  const handleLogin = () => {
    if (passwordInput === dummyPassword) {
      setLoggedIn(true);
      message.success("Welcome Admin!");
    } else {
      message.error("Incorrect Password!");
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "rsvps", id));
      message.success("RSVP deleted successfully!");
      fetchRsvps();
    } catch (error) {
      message.error("Failed to delete RSVP.");
    }
  };

  // Export Excel
  const exportToExcel = () => {
    const formattedData = rsvpEntries.map((entry) => ({
      FullName: entry.fullName,
      AttendingWedding: entry.attendingWedding,
      AttendingReception: entry.attendingReception,
      Heritage: entry.heritage,
      BringingGuests: entry.bringingGuests,
      GuestType: entry.guestType,
      GuestCount: entry.guestCount,
      ChurchTransport: entry.needChurchTransport,
      ChurchTransportCount: entry.churchTransportCount,
      HotelTransport: entry.needHotelTransport,
      HotelTransportCount: entry.hotelTransportCount,
      SubmittedAt: entry.submittedAt,
    }));

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "RSVPs");
    const buf = XLSX.write(wb, { type: "array", bookType: "xlsx" });
    saveAs(new Blob([buf]), "RSVP_Entries.xlsx");
  };

  // Table Columns
  const columns = [
    {
      title: "Guest Name(s)",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Wedding",
      dataIndex: "attendingWedding",
      key: "attendingWedding",
    },
    {
      title: "Reception",
      dataIndex: "attendingReception",
      key: "attendingReception",
    },
    {
      title: "Heritage",
      dataIndex: "heritage",
      key: "heritage",
    },
    {
      title: "Guests",
      key: "guests",
      render: (_, record) =>
        record.bringingGuests === "yes"
          ? `${record.guestCount} (${record.guestType})`
          : "No",
    },
    {
      title: "Church → Venue Transport",
      key: "churchTransport",
      render: (_, record) =>
        record.needChurchTransport === "yes"
          ? `Yes (${record.churchTransportCount})`
          : "No",
    },
    {
      title: "Hotel Full Route Transport",
      key: "hotelTransport",
      render: (_, record) =>
        record.needHotelTransport === "yes"
          ? `Yes (${record.hotelTransportCount})`
          : "No",
    },
    {
      title: "Submitted",
      dataIndex: "submittedAt",
      key: "submittedAt",
      render: (date) =>
        date ? new Date(date).toLocaleString() : "",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  // Login Screen
  if (!loggedIn) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ width: 300 }}>
          <h2>Admin Login</h2>
          <Input.Password
            placeholder="Enter Admin Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            onPressEnter={handleLogin}
          />
          <Button
            type="primary"
            block
            style={{ marginTop: 10 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div style={{ padding: 20 }}>
      <Space style={{ marginBottom: 20 }}>
        <h3>RSVP Admin Dashboard</h3>
        <Button type="primary" onClick={exportToExcel}>
          Export Excel
        </Button>
      </Space>

      <Table
        rowKey="id"
        columns={columns}
        dataSource={rsvpEntries}
        loading={loading}
        bordered
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default AdminDashboard;
