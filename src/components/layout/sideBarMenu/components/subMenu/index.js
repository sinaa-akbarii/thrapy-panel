import Link from "next/link";
import React, { useEffect, useState } from "react";
import icons from "utils/icons";
import styles from "../../styles/SideBarMenu.module.scss";
function SubMenu({
  index,
  item,
  currectPathname,
  collapsedSideBar,
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(false);
  useEffect(() => {
    if (item.subMenu && !collapsedSideBar) {
      let active = item.subMenu.filter((item) => item.link === currectPathname);
      setCollapsed(!(active?.length > 0));
      setActiveSubMenu(active?.length > 0);
    }
  }, [item, collapsedSideBar]);
  useEffect(() => {
    /*  if (collapsedSideBar) {
      setCollapsed(true);
    } */
    if (collapsed) return;
    function handleClick(event) {
      // if (collapsedSideBar) {
      if (
        event.target.id !== "subMenuWrapper" &&
        (event.target.parentElement.id !== "hamburgerMenu" ||
          event.target.parentElement.parentElement.id !== "hamburgerMenu")
      ) {
        setCollapsed(true);
      }
      // }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [collapsed, collapsedSideBar]);

  return (
    <div
      key={index}
      className={`${styles.subMenuItem} ${styles.hasSubMenu} ${
        !collapsed ? styles.open : ""
      } ${activeSubMenu && collapsed ? styles.active : ""}`}
    >
      <div className={styles.pointer} onClick={() => setCollapsed(!collapsed)}>
        <span className={styles.arrow}>{icons.downArrow()}</span>
        <div className={`d-flex align-items-center `}>
          <span
            className={[
              styles.subMenuIcon,
              item.name === "streamStats" ? styles.stream_icon : "",
            ].join(" ")}
          >
            {item.icon}
          </span>
          <span className={styles.subMenuText}>{item.displayName}</span>
        </div>
      </div>

      <div
        id="subMenuWrapper"
        className={`${styles.subMenuWrapper} ${!collapsed ? styles.open : ""}`}
      >
        {item.subMenu &&
          item.subMenu.map((subItem, index) => (
            <Link href={subItem.link} key={index}>
              <a
                key={index}
                className={`${styles.subMenuItem} ${
                  currectPathname === subItem.link ? styles.activeMenu : ""
                } `}
              >
                {currectPathname === subItem.link && (
                  <span className={styles.activeIndicator} />
                )}

                <span className={`${styles.show} ${styles.subMenuText}`}>
                  {subItem.displayName}
                </span>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SubMenu;
