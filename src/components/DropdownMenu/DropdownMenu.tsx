import { useState, useEffect, useRef } from "react";

import arrow from "../../images/icons/arrow.png";
import styles from "./DropdownMenu.module.scss";

interface IDropdownMenu {
  content: { name: string; icon?: undefined | string; link: string }[];
  picture: false | string;
  pictureType?: "circle" | "square";
  text: string;
}

const DropdownMenu = ({
  content,
  picture,
  pictureType,
  text,
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
    <div className={styles.dropdownContainer} ref={menuRef}>
      <div className={styles.dropdownTrigger} onClick={openMenu}>
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
