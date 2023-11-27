import { ReactNode } from "react";

import styles from "./ComponentLayout.module.scss";

interface IComponentLayout {
  children?: ReactNode;
}

const ComponentLayout = ({ children }: IComponentLayout) => {
  return <div className={styles.container}>{children}</div>;
};

export default ComponentLayout;
