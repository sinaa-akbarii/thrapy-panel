import icons from "utils/icons";

export const handleSortUsers = (
  followingUsers,
  onlineUsers
) => {
  const onlineUser = followingUsers.filter((item) =>
    onlineUsers.includes(item._key)
  );
  const offlineUser = followingUsers.filter(
    (item) => !onlineUsers.includes(item._key)
  );
  return onlineUser.concat(offlineUser);
};

// export const fetchingData = async (
//   setFollowingUsers,
//   token
// ) => {
//   const usersData = await translator("followings", {
//     token: { jwt_token: token },
//     queryParams: {
//       "limit[offset]": 0,
//       "limit[count]": 10000,
//     },
//   });

//   setFollowingUsers(usersData?.data);
// };

export const subMenuItems = (currentUser) =>
  !!currentUser
    ? [
      {
        icon: icons.home(),
        name: "home",
        displayName: "صفحه اصلی",
        link: "/",
      },
      {
        icon: icons.explore(),
        name: "explore",
        displayName: "کاوش",
        link: "/explore?activeTab=category",
      },
      {
        icon: icons.followings(),
        name: "followings",
        displayName: "دنبال شده ها",
        link: `/user/${currentUser?.key || 123}/followings`,
      },
    ]
    : [
      {
        icon: icons.home(),
        name: "home",
        displayName: "صفحه اصلی",
        link: "/",
      },
      {
        icon: icons.explore(),
        name: "explore",
        displayName: "کاوش",
        link: "/explore?activeTab=category",
      },
    ];
export const panelSubMenuItems = (currentUser) => [
  {
    icon: icons.dashboard(),
    name: "dashboard",
    displayName: "داشبورد",
    link: `/user/${currentUser?.key || 123}/dashboard`,
  },
  {
    icon: icons.stream(),
    name: "stream",
    displayName: "مدیریت استریم",
    link: "",
    subMenu: [
      {
        icon: icons.stream(),
        name: "stream",
        displayName: "پنل استریم",
        link: `/user/${currentUser?.key || 123}/stream?activeTab=chat`,
      },
      {
        icon: icons.stats(),
        name: "streamStats",
        displayName: " تنظیمات استریم",
        link: `/user/${currentUser?.key || 123}/streamSettings`,
      },
    ],
  },
  {
    icon: icons.star(),
    name: "subscribe",
    displayName: "مدیریت اشتراک",
    link: "",
    subMenu: [
      // {
      //   icon: icons.star(),
      //   name: "subscribe",
      //   displayName: "مدیریت پوینت",
      //   link: `/user/${currentUser?.key || 123}/statistics`,
      // },
      {
        icon: icons.star(),
        name: "subscribe",
        displayName: "ساخت اشتراک",
        link: `/user/${currentUser?.key || 123}/create-subscribe?activeTab=create-subscribe`,
      },
    ],
  },
  {
    icon: icons.clip(),
    name: "clips",
    displayName: "کلیپ های من",
    link: `/user/${currentUser?.key || 123}/clips`,
  },
  {
    icon: icons.chart_square(),
    name: "statistics",
    displayName: "آمار ها ",
    link: "",
    subMenu: [
      {
        icon: icons.chart_square(),
        name: "statistics",
        displayName: "آمار کانال ",
        link: `/user/${currentUser?.key || 123}/statistics`,
      },
      {
        icon: icons.stats(),
        name: "streamStats",
        displayName: "گزارش استریم",
        link: `/user/${currentUser?.key || 123}/stream-stats`,
      },
    ],
  },

  {
    icon: icons.followings(),
    name: "followings",
    displayName: "دنبال کنندگان",
    link: `/user/${currentUser?.key || 123}/followersPanel`,
  },
  {
    icon: icons.achievement(),
    name: "achievement",
    displayName: "دستاورد ها",
    link: `/user/${currentUser?.key || 123}/achievement`,
  },

];
export const users = [
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: true,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: true,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: true,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: true,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: true,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: true,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: true,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: true,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "esme in karbar kheily kheily tulani ast",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "eliiiiii",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
  {
    name: "last",
    key: "12333333",
    profileImageUrl: "defaultImages.user",
    isOnline: false,
  },
];
