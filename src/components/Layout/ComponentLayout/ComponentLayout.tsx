import { ReactNode } from "react";

import styles from "./ComponentLayout.module.scss";

interface IComponentLayout {
  children?: ReactNode;
  description?: string | undefined;
}

const ComponentLayout = ({ children, description }: IComponentLayout) => {
  return (
    <div className={styles.container}>
      {description && <span className={styles.descr}>{description}</span>}
      {children}
    </div>
  );
};

export default ComponentLayout;
