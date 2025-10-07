import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import InfoIcon from "@mui/icons-material/Info";

const Navbaritem = [
  { name: "Dashboard", logo: <DashboardIcon />, path: "/Dashboard" },
  { name: "Transaction", logo: <ReceiptLongIcon />, path: "/Transaction" },
  { name: "About", logo: <InfoIcon />, path: "/About" },
];
export default Navbaritem;
