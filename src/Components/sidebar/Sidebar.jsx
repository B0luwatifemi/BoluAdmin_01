import "./sidebar.css"

import { LineStyle, Person, Inventory2, Equalizer, Paid, Message, Feedback, Mail, Timeline, WorkOutline, TrendingUp, Report, Insights } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        
                        <LineStyle className="sidebarIcon" />
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon" />
                       Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon" />
                       Sales
                    </li>
                </ul> 
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                    <li className="sidebarListItem">
                        <Person className="sidebarIcon" />
                        User
                    </li>
                    </Link>
                    <Link to="/product" className="link">
                    <li className="sidebarListItem">
                        <Inventory2 className="sidebarIcon" />
                       Products
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Paid className="sidebarIcon" />
                       Transactions
                    </li>
                    <li className="sidebarListItem">
                        <Equalizer className="sidebarIcon" />
                       Reports
                    </li>
                </ul> 
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <Mail className="sidebarIcon" />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <Feedback className="sidebarIcon" />
                       Feedback
                    </li>
                    <li className="sidebarListItem">
                        <Message className="sidebarIcon" />
                       Messages
                    </li>
                </ul> 
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <WorkOutline className="sidebarIcon" />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Insights className="sidebarIcon" />
                       Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon" />
                       Reports
                    </li>
                </ul> 
            </div>
        </div>
      
    </div>
  );
}
