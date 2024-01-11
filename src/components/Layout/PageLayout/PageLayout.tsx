import styles from "./Layout.module.scss";

interface ILayoutProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
}

const PageLayout = ({ leftSide, rightSide }: ILayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{leftSide}</div>
      <div className={styles.info}>{rightSide}</div>
    </div>
  );
};

export default PageLayout;
