import { Fragment } from "react";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  leftSide: React.ReactNode[];
  rightSide: React.ReactNode[];
}

const PageLayout = ({ leftSide, rightSide }: ILayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {leftSide.map((item, i) => (
          <Fragment key={i}>{item}</Fragment>
        ))}
      </div>
      <div className={styles.info}>
        {rightSide.map((item, i) => (
          <Fragment key={i}>{item}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default PageLayout;
