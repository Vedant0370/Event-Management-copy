import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const AccountantDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accountant, setAccountant] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/mockAccountatnData/${id}`)
      .then((response) => {
        setAccountant(response.data);
      })
      .catch((error) => {
        console.error("Error fetching accountant details:", error);
      });
  }, [id]);

  const handleEdit = () => {
    console.log("function is coming");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${accountant.firstName} data?`
    );

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3000/mockAccountantData/${id}`)
        .then(() => {
          console.log("Accountant data deleted successfully");
          navigate("/accountantdetails");
        })
        .catch((error) => {
          console.error("Error deleting accountant data:", error);
        });
    }
  };

  if (!accountant) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>
        {accountant.firstName} {accountant.lastName} Details
      </h2>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{`${accountant.firstName} ${accountant.lastName}`}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Contact Number: {accountant.accountantPhone}
          </Card.Subtitle>
          <Card.Text>Address: {accountant.accountantAddress}</Card.Text>
          <Card.Text>Email: {accountant.accountantEmail}</Card.Text>
          <Card.Text>City: {accountant.accountantCity}</Card.Text>
          <Card.Text>State: {accountant.accountantState}</Card.Text>
          <div className="my-3">
            <hr />
            <h6 className="mb-3">Bank details : </h6>
            <Card.Text>
              Account Holder Name: {accountant.accountHolderName}
            </Card.Text>
            <Card.Text>Account Number: {accountant.accountNumber}</Card.Text>
            <Card.Text>IFSC Code: {accountant.ifscCode}</Card.Text>
            <Card.Text>Bank Name: {accountant.bankName}</Card.Text>
            <Card.Text>Branch Name: {accountant.branchName}</Card.Text>
            <hr />
          </div>
          <div className="my-3">
            <Button variant="primary" onClick={handleEdit}>
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

export default AccountantDetailPage;
