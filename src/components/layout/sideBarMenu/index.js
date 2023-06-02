import React, { useEffect, useState } from "react";
import { handleSortUsers, fetchingData } from "./services";
import styles from "./styles/SideBarMenu.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import icons from "utils/icons";

import SubMenu from "./components/subMenu";
import {subMenuItems} from "../services"
function SideBarMenu({
  collapse = false,
  sideBarStreamMode,
  overlay,
  handleCollapseMenu,
  gameriaManager,
  hideLeaderBoardBanner,
}) {
  let { pathname } = useRouter();
  let { user_id } = useRouter().query;
  const [followingUsers, setFollowingUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [filterdUsers, setFilterdUsers] = useState([]);
  const [offset, setOffset] = useState(10);
  const [currectPathname, setCurrectPathname] = useState(pathname);
  const [currentUser, setCurrentUser] =  useState()
  const [onlineUsers, setOnlineUsers] = useState()

  useEffect(() => {
    if (user_id) {
      setCurrectPathname(pathname.replace("[user_id]", user_id.toString()));
    }
  }, [pathname, user_id]);

  useEffect(() => {
    if (followingUsers)
      setSortedUsers(handleSortUsers(followingUsers, onlineUsers));
  }, [followingUsers, onlineUsers]);

  useEffect(() => {
    setFilterdUsers(sortedUsers.slice(0, offset));
  }, [sortedUsers, offset]);

  const handleLoadMore = () => {
    if (offset <= sortedUsers.length) setOffset(offset + 10);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    // fetchingData(setFollowingUsers, token);
  }, []);

  return (
    <div
      className={`${styles.sideBarMenu} ${
        pathname === "/" && !hideLeaderBoardBanner ? styles.home_sidebar : ""
      }
      ${collapse ? styles.collapsedMenu : ""} ${
        overlay ? styles.sideBarStreamMode : ""
      } ${overlay && !sideBarStreamMode ? styles.hiddenMenu : ""} `}
    >
      {overlay && (
        <>
          <div className={styles.subWrapper}>
            <span onClick={handleCollapseMenu} className={styles.hamburgerMenu}>
              {icons.hamburgerMenu()}
            </span>
            <Link href="/">
              <div className={`${styles.logo} ${styles.sub}`}>
                <span className={styles.logoAvatar}>{logo.avatar()}</span>
                <span className={styles.logoTypo}>{logo.typo()}</span>
              </div>
            </Link>
          </div>
          <span className={styles.thickDivider} />
        </>
      )}
      <div className={styles.subMenus}>
        {subMenuItems().map((item, index) => {
          return item.subMenu ? (
            <SubMenu
              collapsedSideBar={collapse}
              index={index}
              item={item}
              currectPathname={currectPathname}
            />
          ) : (
            <Link href={item.link} key={index}>
              <a
                key={index}
                className={`${styles.subMenuItem} ${
                  currectPathname === item.link.split("?")[0]
                    ? styles.activeMenu
                    : ""
                }`}
              >
                {currectPathname === item.link.split("?")[0] && (
                  <span className={styles.activeIndicator} />
                )}

                <span
                  className={[
                    styles.subMenuIcon,
                    item.name === "streamStats" ? styles.stream_icon : "",
                  ].join(" ")}
                >
                  {item.icon}
                </span>
                <span className={styles.subMenuText}>{item.displayName}</span>
              </a>
            </Link>
          );
        })}
      </div>
      {/* <span className={styles.divider} /> */}
      {!!currentUser && (
        <div
          className={`${styles.users} ${collapse ? styles.shortenUsers : ""}`}
        >
          {filterdUsers.map((user, index) => (
            <div key={index} className={styles.userBadgeContainer}>
              <UserBadge
                onlineUsers={onlineUsers}
                avatarOnly={collapse}
                user={user}
              />
            </div>
          ))}
          {filterdUsers.length !== sortedUsers.length && (
            <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
              نمایش بیشتر
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default SideBarMenu;
