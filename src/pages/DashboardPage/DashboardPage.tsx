import PinnedPosts from "../../components/PinnedPosts/PinnedPosts";
import Dashboards from "../../components/DashboardsList/DashboardsList";
import SortPosts from "../../components/SortPosts/SortPosts";
import Post from "../../components/Post/Post";

import LayoutPage from "../../components/Layout/PageLayout/PageLayout";

const leftSide = [
  <PinnedPosts />,
  <SortPosts />,
  <Post image="https://www.zastavki.com/pictures/1920x1080/2012/Widescreen_Russian_dolls_035029_.jpg" />,
  <Post image="https://i.pinimg.com/564x/5f/84/35/5f8435b830ff436032cd1d53b0f3fdf6.jpg" />,
  <Post image="https://i.pinimg.com/564x/9b/36/4e/9b364eed8278ff1abbc73d551df929b0.jpg" />,
];
const rightSide = [<Dashboards />];

const DashboardPage = () => {
  return <LayoutPage leftSide={leftSide} rightSide={rightSide}></LayoutPage>;
};

export default DashboardPage;
