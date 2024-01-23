import styles from "./ListItemWrapper.module.scss";

const ListItemWrapper = (props: any) => {
  return <li className={styles.wrapper}>{props.children}</li>;
};

export default ListItemWrapper;
