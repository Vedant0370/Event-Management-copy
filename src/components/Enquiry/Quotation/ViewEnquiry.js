import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MakeQuotation from "./MakeQuotation";
import { Button } from "react-bootstrap";

function ViewEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const id = 5;

  useEffect(() => {
    // Fetch data from the backend API here and set it to the `enquiries` state.
    // For now, let's assume the data is an array of objects.
    const mockEnquiries = [
      {
        id: 1,
        title: "Enquiry 1",
        eventName: "Event 1",
        eventDate: "2023-08-22",
        numberOfGuests: "100",
        eventVenue: "Venue A",
        eventRequirement: "Catering, Decoration, Music",
        customerName: "John Doe",
        customerEmail: "john@example.com",
        contactNumber: "123-456-7890",
        customerAddress: "123 Main St, City",
      },
      // ... Add more mock enquiries
    ];

    setEnquiries(mockEnquiries);
  }, []);

  const filteredEnquiries = enquiries.filter((enquiry) =>
    enquiry.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();

  const handlemake = () => {
    navigate("/edit-quotation", {
      state: enquiries,
    });
  };

  return (
    <div className="container mt-5">
      <h2>Enquiries List</h2>
      <div className="mb-3 my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Event Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="row">
        {filteredEnquiries.map((enquiry) => (
          <div className="col-md-4 mb-4" key={enquiry.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{enquiry.title}</h5>
                <p className="card-text">
                  Event Name: {enquiry.eventName}
                  <br />
                  Event Date: {enquiry.eventDate}
                  <br />
                  Number of Guests: {enquiry.numberOfGuests}
                  <br />
                  Event Venue: {enquiry.eventVenue}
                  <br />
                  Event Requirement: {enquiry.eventRequirement}
                  <br />
                  Customer Name: {enquiry.customerName}
                  <br />
                  Customer Email: {enquiry.customerEmail}
                  <br />
                  Contact Number: {enquiry.contactNumber}
                  <br />
                  Customer Address: {enquiry.customerAddress}
                </p>
                {console.log(enquiry)}
                <Button className="btn btn-info" onClick={handlemake}>
                  make quotation
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewEnquiry;
