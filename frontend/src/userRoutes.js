// adminRoutes.js
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import NewDashboard from "views/examples/NewDashboard.js";
import UserPaymentForm from "views/users/payment.js"
import GrammarForm from "views/users/grammar.js"
import MeetingForm from "views/users/meet.js"
import VoiceForm from "views/users/voice.js"
import LearningHistoryFrom from "views/users/learninghistory.js"


var userRoutes = [
  {
    path: "/dashboard",
    name: "Dasboard",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/user",
  },
  {
    path: "/explore",
    name: "Explore",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/user",
  },
  {
    path: "/find-tutor",
    name: "Find a tutor",
    icon: "ni ni-pin-3 text-orange",
    component: <MeetingForm />,
    layout: "/user",
  },
  {
    path: "/match",
    name: "Talking Now",
    icon: "ni ni-pin-3 text-orange",
    component: <MeetingForm />,
    layout: "/user",
  },
  {
    path: "/meeting",
    name: "Meeting",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/user",
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/user",
  },

  {
    path: "/grammar",
    name: "Grammar Checking",
    icon: "ni ni-planet text-blue",
    component: <GrammarForm />,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/user",
  },
  {
    path: "/payment",
    name: "Payment",
    icon: "ni ni-bullet-list-67 text-red",
    component: <UserPaymentForm />,
    layout: "/user",
  },
  {
    path: "/test",
    name: "voice",
    icon: "ni ni-bullet-list-67 text-red",
    component: <VoiceForm />,
    layout: "/user",
  },

  {
    path: "/history",
    name: "Learning history",
    icon: "ni ni-bullet-list-67 text-red",
    component: <LearningHistoryFrom />,
    layout: "/user",
  },


];

export default userRoutes;
