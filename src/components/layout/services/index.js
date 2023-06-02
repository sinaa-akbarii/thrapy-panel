import icons from "utils/icons";
let id = "1234567" ;
export const subMenuItems = () =>
     [
      {
        icon: icons.home(),
        name: "home",
        displayName: "Home",
        link: "/",
      },
      {
        icon: icons.personGroup(),
        name: "patients",
        displayName: "Patients",
        link: "/allpatients",
      },
      {
        icon: icons.person(),
        name: "profile",
        displayName: "Profile",
        link: `user/${id}/profile`,
      },
    ]
    ;