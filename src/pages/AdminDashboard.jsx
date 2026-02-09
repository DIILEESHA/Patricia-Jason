import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Input, Space, message } from "antd";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const dummyPassword = "pj26"; // Set your dummy password here

const AdminDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [rsvpEntries, setRsvpEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch RSVPs
  const fetchRsvps = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "rsvps"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setRsvpEntries(data);
    setLoading(false);
  };

  useEffect(() => {
    if (loggedIn) fetchRsvps();
  }, [loggedIn]);

  // Handle Login
  const handleLogin = () => {
    if (passwordInput === dummyPassword) {
      setLoggedIn(true);
      message.success("Welcome Admin!");
    } else {
      message.error("Incorrect Password!");
    }
  };

  // Handle Delete RSVP
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "rsvps", id));
      message.success("RSVP deleted successfully!");
      fetchRsvps();
    } catch (error) {
      message.error("Failed to delete RSVP.");
    }
  };

  // Export to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(rsvpEntries);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "RSVPs");
    const buf = XLSX.write(wb, { type: "array", bookType: "xlsx" });
    saveAs(new Blob([buf]), "RSVP_Entries.xlsx");
  };

  // Table columns
  const columns = [
    { title: "Full Name", dataIndex: "fullName", key: "fullName" },
    {
      title: "Attending Wedding",
      dataIndex: "attendingWedding",
      key: "attendingWedding",
    },
    {
      title: "Attending Reception",
      dataIndex: "attendingReception",
      key: "attendingReception",
    },
    {
      title: "Transportation",
      dataIndex: "transportationNeeded",
      key: "transportationNeeded",
    },
    {
      title: "Transport From",
      dataIndex: "transportFrom",
      key: "transportFrom",
      render: (val) => val.join(", "),
    },
    { title: "Heritage", dataIndex: "heritage", key: "heritage" },
    { title: "Guests", dataIndex: "guestCount", key: "guestCount" },
    { title: "Message", dataIndex: "message", key: "message" },
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

  // Login Page
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

  // Admin Dashboard Page
  return (
    <div style={{ padding: 20 }}>
      <Space style={{ marginBottom: 20 }}>
        <h4>RSVP Admin Dashboard</h4>
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
