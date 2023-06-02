import Router from "next/router";
export let navigation = [
  // { name: 'HomePage', href: '/', current: false },
  { name: "All Players", href: "/allPlayers", current: false },
  { name: "Baskets", href: "/Baskets", current: false },
  { name: 'Battles', href: '/battles', current: false },
  { name: 'Live Battles', href: '/liveBattles', current: false },
  { name: 'Lobbies', href: '/lobbies', current: false },
];

export let menuItems = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
];

export const handleLogIn = (setOpenModal) => {
  setOpenModal(true);
};

export const handleSignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isLogin");
  localStorage.removeItem("user_id");
  if (Router.pathname === "/") {
    Router.reload();
  } else {
    Router.push("/");
  }
};

export const handleSignUp = (setOpenSignUpModal) => {
  setOpenSignUpModal(true)
}