import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CreateSharpIcon from '@material-ui/icons/CreateSharp';
import FileCopySharpIcon from '@material-ui/icons/FileCopySharp';
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: SignalCellularAltIcon ,
    component: DashboardPage,
    layout: "/admin"
  },
  
  
  {
    path: "/notifications",
    name: "Issue",
    icon: FileCopySharpIcon,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Create Issues",
    icon: CreateSharpIcon,
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
