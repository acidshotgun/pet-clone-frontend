import { useState, useEffect, useRef } from "react";

import arrow from "../../images/icons/arrow.png";
import styles from "./DropdownMenu.module.scss";

interface IDropdownMenu {
  content: { name: string; icon?: undefined | string; link: string }[];
  picture: false | string;
  pictureType?: "circle" | "square";
  text: string;
  align: "left" | "right";
}

const DropdownMenu = ({
  content,
  picture,
  pictureType,
  text,
  align,
}: IDropdownMenu) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  let menuRef: any = useRef();

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownTrigger} onClick={openMenu} ref={menuRef}>
        {picture ? (
          <img
            className={`${styles.picture} ${
              pictureType === "circle" ? styles.circle : styles.square
            }`}
            src={picture}
            alt="photo1"
          ></img>
        ) : null}
        <span className={styles.text}>{text}</span>
        <img
          className={`${styles.arrow} ${open && styles.active}`}
          src={arrow}
          alt="arrow"
        ></img>
      </div>

      <div
        style={align === "left" ? { left: "0" } : { right: "0" }}
        className={`${styles.dropdownMenu} ${
          open ? styles.active : styles.inactive
        }`}
      >
        <ul className={styles.list}>
          {content.map((item, i) => {
            return item.name === "separator" ? (
              <hr className={styles.separator} key={i}></hr>
            ) : (
              <li className={styles.listItem} key={i} onClick={openMenu}>
                <a href={item.link}>
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt="icon"
                      className={styles.icon}
                    ></img>
                  )}
                  <span className={styles.link}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
