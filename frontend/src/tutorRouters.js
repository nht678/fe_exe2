// adminRoutes.js
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import NewDashboard from "views/examples/NewDashboard.js";
import CVForm from "views/tutors/cv.js"
import MeetingForm from 'views/tutors/meeting.js' 
import TutorWithdrawForm from "views/tutors/payment";
var tutorRoutes = [
  {
    path: "/new-dashboard",
    name: "New Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <NewDashboard />,
    layout: "/tutor",
  },
  {
    path: "/explore",
    name: "Explore",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/tutor",
  },
  {
    path: "/matching",
    name: "Talking Now",
    icon: "ni ni-pin-3 text-orange",
    component: <MeetingForm />,
    layout: "/tutor",
  },
  {
    path: "/meeting",
    name: "Meeting",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/tutor",
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/tutor",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/tutor",
  },

  {
    path: "/cv",
    name: "CV",
    icon: "ni ni-bullet-list-67 text-red",
    component: <CVForm/>,
    layout: "/tutor",
  },
  {
    path: "/withdraw",
    name: "Withdraw",
    icon: "ni ni-bullet-list-67 text-red",
    component: <TutorWithdrawForm />,
    layout: "/tutor",
  },
];

export default tutorRoutes;
