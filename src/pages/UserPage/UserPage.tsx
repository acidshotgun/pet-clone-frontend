import PinnedPosts from "../../components/PinnedPosts/PinnedPosts";
import UserProfile from "../../components/UserProfile/UserProfile";
import Dashboards from "../../components/DashboardsList/DashboardsList";
import CreatePost from "../../components/CreatePost/CreatePost";
import SortPosts from "../../components/SortPosts/SortPosts";
import Post from "../../components/Post/Post";

import styles from "./UserPage.module.scss";

const fakeData = {
  backgroundImage:
    "https://i.pinimg.com/564x/6c/12/44/6c1244d7d3458fb996921f86e181c1ae.jpg",
  nickName: "acidshotgun",
  avatarUrl:
    "https://i.pinimg.com/564x/27/d1/03/27d1032d285f26f60a7e3881d9d0da4b.jpg",
  descr:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
};

const UserPage = () => {
  const isAuth = true;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <PinnedPosts />
        {isAuth && <CreatePost />}
        <SortPosts />
        <Post image="https://www.zastavki.com/pictures/1920x1080/2012/Widescreen_Russian_dolls_035029_.jpg" />
        <Post image="https://i.pinimg.com/564x/5f/84/35/5f8435b830ff436032cd1d53b0f3fdf6.jpg" />
        <Post image="https://i.pinimg.com/564x/9b/36/4e/9b364eed8278ff1abbc73d551df929b0.jpg" />
      </div>

      <div className={styles.info}>
        <UserProfile
          backgroundImage={fakeData.backgroundImage}
          nickName={fakeData.nickName}
          avatarUrl={fakeData.avatarUrl}
          descr={fakeData.descr}
        />
        <Dashboards />
      </div>
    </div>
  );
};

export default UserPage;
