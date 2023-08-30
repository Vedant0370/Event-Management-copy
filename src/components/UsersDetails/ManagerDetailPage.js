import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ManagerDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const navigate = useNavigate();
  const [manager, setManager] = useState(null);
  const manager_data = location.state;

  console.log(manager_data);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/mockManagerData/${id}`)
      .then((response) => {
        setManager(response.data);
      })
      .catch((error) => {
        console.error("Error fetching manager details:", error);
      });
  }, [id]);

  const handleEdit = () => {
    console.log("function is comming ");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${manager.firstName} data?`
    );

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/mockManagerData/${id}`)
        .then(() => {
          console.log("Manager data deleted successfully");

          navigate("/managerdetails");
        })
        .catch((error) => {
          console.error("Error deleting manager data:", error);
        });
    }
  };

  if (!manager) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>
        {manager.firstName} {manager.lastName} Details
      </h2>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{`${manager.firstName} ${manager.lastName}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Contact Number: {manager.managerPhone}
          </Card.Subtitle>
          <Card.Text>Address: {manager.managerAddress}</Card.Text>
          <Card.Text>Email: {manager.managerEmail}</Card.Text>
          <Card.Text>City: {manager.managerCity}</Card.Text>
          <Card.Text>State: {manager.managerState}</Card.Text>
          <div className="my-3">
            <hr />
            <h6 className="mb-3">Bank details : </h6>
            <Card.Text>
              Account Holder Name: {manager.accountHolderName}
            </Card.Text>
            <Card.Text>Account Number: {manager.accountNumber}</Card.Text>
            <Card.Text>IFSC Code: {manager.ifscCode}</Card.Text>
            <Card.Text>Bank Name: {manager.bankName}</Card.Text>
            <Card.Text>Branch Name: {manager.branchName}</Card.Text>
            <hr />
          </div>
          <div className="my-3">
            <Button variant="info" onClick={handleEdit}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ManagerDetailPage;
