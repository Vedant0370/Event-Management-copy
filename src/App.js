import Sidebar from "./components/Sidebar/Sidebar";
import AddAccountant from "./components/AddUser/AddAccountant";
import AddManager from "./components/AddUser/AddManager";
import AddExecutive from "./components/AddUser/AddExecutive";
import AddVendor from "./components/AddUser/AddVendor";
import AccountantDetails from "./components/UsersDetails/AccountantDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ViewManagerDetails from "./components/UsersDetails/ManagerDetails";
import ManagerDetails from "./components/UsersDetails/ManagerDetails";
import Enquiry from "./components/Enquiry/Enquiry";
import AddEvent from "./components/Event/AddEvent";
import ManagerDetailPage from "./components/UsersDetails/ManagerDetailPage";
import ViewEnquiry from "./components/Enquiry/Quotation/ViewEnquiry";
import MakeQuotation from "./components/Enquiry/Quotation/MakeQuotation";
import AdvancePaymentForm from "./components/Event/AdvancePayment";
import OrderForm from "./components/Event/orderForm";
import AddSalary from "./components/salary/AddSalary";
import AccountantDetailPage from "./components/UsersDetails/AccountantDetailPage";
import ExecutiveDetails from "./components/UsersDetails/executive/ExecutiveDetails";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<AddManager />} />
          <Route path="/addmanager" element={<AddManager />} />
          <Route path="/addaccountant" element={<AddAccountant />} />
          <Route path="/addvendor" element={<AddVendor />} />
          <Route path="/addexecutive" element={<AddExecutive />} />
          <Route path="/accountantdetails" element={<AccountantDetails />} />
          <Route path="/managerdetails" element={<ManagerDetails />} />
          <Route path="/executicedetails" element={<ExecutiveDetails />} />
          <Route path="/addenquiry" element={<Enquiry />} />
          <Route path="/addevent" element={<AddEvent />} />
          <Route path="/manager/:id" element={<ManagerDetailPage />} />
          <Route path="/accountant/:id" element={<AccountantDetailPage />} />
          <Route path="/quotation" element={<ViewEnquiry />} />
          <Route path="/edit-quotation" element={<MakeQuotation />} />
          <Route path="/advancepayment" element={<AdvancePaymentForm />} />
          <Route path="/orderform" element={<OrderForm />} />
          <Route path="/addsalary" element={<AddSalary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
