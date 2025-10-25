import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import InfoIcon from "@mui/icons-material/Info";

const Navbaritem = [
  { name: "Dashboard", logo: <DashboardIcon />, path: "/dashboard", end: true },
  { name: "Transaction", logo: <ReceiptLongIcon />, path: "/transaction" },
  { name: "About", logo: <InfoIcon />, path: "/about" },
];
export default Navbaritem;
