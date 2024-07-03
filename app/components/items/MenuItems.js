import snoozed from "@/public/images/snoozed.svg";
import starred from "@/public/images/starred.svg";
import sent from "@/public/images/sent.svg";
import inbox from "@/public/images/inbox.svg";
import drafts from "@/public/images/drafts.svg";

const menuItems = [
  { id: "/", icon: inbox, label: "Inbox", count: 14 },
  { id: "starred", icon: starred, label: "Starred", count: null },
  { id: "snoozed", icon: snoozed, label: "Snoozed", count: null },
  { id: "sent", icon: sent, label: "Sent", count: null },
  { id: "drafts", icon: drafts, label: "Drafts", count: null },
];

export default menuItems;
