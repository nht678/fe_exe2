// adminRoutes.js
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import NewDashboard from "views/examples/NewDashboard.js";
import CV from "views/admin/cv.js";


import AdminPaymentForm from "views/admin/payment.js";
import AdminWithdrawForm from "views/admin/widthdraw.js";
import TutorListForm from "views/admin/tutors.js";
import UserListForm from "views/admin/users.js";
import AdminLearningHistoryFrom from "views/admin/learninghistory.js"

var adminRoutes = [
  {
    path: "/new-dashboard",
    name: "New Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <NewDashboard />,
    layout: "/admin",
  },
  {
    path: "/explore",
    name: "Explore",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  
  {
    path: "/meeting",
    name: "Meeting",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "User Management",
    icon: "ni ni-planet text-blue",
    component: <UserListForm />,
    layout: "/admin",
  },
  {
    path: "/tutors",
    name: "Tutor Management",
    icon: "ni ni-planet text-blue",
    component: <TutorListForm />,
    layout: "/admin",
  },
  {
    path: "/cv",
    name: "New Tutor",
    icon: "ni ni-pin-3 text-orange",
    component: <CV />,
    layout: "/admin",
  },
  {
    path: "/payment",
    name: "User Payment",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AdminPaymentForm />,
    layout: "/admin",
  },
  {
    path: "/withdraw",
    name: "Tutor Withdraw",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AdminWithdrawForm />,
    layout: "/admin",
  },
  {
    path: "/history",
    name: "History",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AdminLearningHistoryFrom />,
    layout: "/admin",
  },
  
];

export default adminRoutes;
