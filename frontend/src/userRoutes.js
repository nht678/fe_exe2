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
    icon: "ni ni-spaceship text-red",
    component: <Icons />,
    layout: "/user",
  },
  {
    path: "/find-tutor",
    name: "Find a tutor",
    icon: "ni ni-active-40 text-yellow",
    component: <MeetingForm />,
    layout: "/user",
  },
  {
    path: "/match",
    name: "Talking Now",
    icon: "ni ni-chat-round text-orange",
    component: <MeetingForm />,
    layout: "/user",
  },
  {
    path: "/meeting",
    name: "Meeting",
    icon: "ni ni-laptop text-purple",
    component: <Profile />,
    layout: "/user",
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "ni ni-calendar-grid-58 text-brown",
    component: <Profile />,
    layout: "/user",
  },

  {
    path: "/grammar",
    name: "Grammar Checking",
    icon: "ni ni-check-bold text-green",
    component: <GrammarForm />,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-circle-08 text-blue",
    component: <Tables />,
    layout: "/user",
  },
  {
    path: "/payment",
    name: "Payment",
    icon: "ni ni-credit-card text-cyan",
    component: <UserPaymentForm />,
    layout: "/user",
  },
  {
    path: "/test",
    name: "voice",
    icon: "ni ni-headphones text-pink",
    component: <VoiceForm />,
    layout: "/user",
  },

  {
    path: "/history",
    name: "Learning history",
    icon: "ni ni-archive-2 text-black",
    component: <LearningHistoryFrom />,
    layout: "/user",
  },


];

export default userRoutes;
