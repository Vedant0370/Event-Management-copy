import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const AccountantDetails = () => {
  const [accountantData, setAccountantData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAccountantData, setFilteredAccountantData] = useState([]);

  useEffect(() => {
    // Fetch accountant data from the API
    axios
      .get("http://localhost:3000/mockAccountatnData")
      .then((response) => {
        setAccountantData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching accountant data:", error);
      });
  }, []);

  useEffect(() => {
    // Filter accountantData based on searchQuery
    const filteredData = accountantData.filter(
      (accountant) =>
        accountant.firstName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        accountant.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAccountantData(filteredData);
  }, [searchQuery, accountantData]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Accountant Details</h2>
      <div className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by first name or last name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredAccountantData.length > 0 ? (
        filteredAccountantData.map((accountant) => (
          <Card
            key={accountant.id}
            style={{ width: "100%", marginBottom: "20px" }}
          >
            <Card.Body>
              <Card.Title>{`${accountant.firstName} ${accountant.lastName}`}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Contact Number: {accountant.accountantPhone}
              </Card.Subtitle>
              <Card.Text>Address: {accountant.accountantAddress}</Card.Text>
              <Link to={`/accountant/${accountant.id}`}>
                <Button variant="info">Know More</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="text-center">No accountant details found.</p>
      )}
    </div>
  );
};

export default AccountantDetails;
