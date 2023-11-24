import UserProfile from "../../components/UserProfile/UserProfile";

import styles from "./UserPage.module.scss";

const fakeData = {
  backgroundImage:
    "https://i.pinimg.com/564x/6c/12/44/6c1244d7d3458fb996921f86e181c1ae.jpg",
  nickName: "acidshotgun",
  avatarUrl:
    "https://i.pinimg.com/564x/ce/63/80/ce63803009788c51c58bc2261dbc66c7.jpg",
  descr:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
};

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}></div>

      <div className={styles.info}>
        <UserProfile
          backgroundImage={fakeData.backgroundImage}
          nickName={fakeData.nickName}
          avatarUrl={fakeData.avatarUrl}
          descr={fakeData.descr}
        />
      </div>
    </div>
  );
};

export default UserPage;
