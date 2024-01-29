import PinnedPosts from "../../components/PinnedPosts/PinnedPosts";
import DiscussionsList from "../../components/DiscussionsList/DiscussionsList";
import Contacts from "../../components/Contacts/Contacts";
import SortPosts from "../../components/SortPosts/SortPosts";
import Post from "../../components/Post/Post";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import DashboardProfile from "../../components/DashboardProfile/DashboardProfile";

import axios from "../../services/axiosConfig";
import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/useRequest";
import { useParams } from "react-router-dom";

import LayoutPage from "../../components/Layout/PageLayout/PageLayout";

const discissionsData = [
  {
    name: "Help me to find a movie!!! / Search",
    messages: "143 Messages",
    date: "12 Oct, 2022",
  },
  {
    name: "Help me to find a movie!!! / Search",
    messages: "143 Messages",
    date: "12 Oct, 2022",
  },
  {
    name: "Help me to find a movie!!! / Search",
    messages: "143 Messages",
    date: "12 Oct, 2022",
  },
  {
    name: "Help me to find a movie!!! / Search",
    messages: "143 Messages",
    date: "12 Oct, 2022",
  },
  {
    name: "Help me to find a movie!!! / Search",
    messages: "143 Messages",
    date: "12 Oct, 2022",
  },
];

const DashboardPage = () => {
  const [dasboardPageData, setDashboardPageData] = useState(null);
  const { request, loading, error } = useHttp();
  const { dashboardId } = useParams();

  useEffect(() => {
    request(`/dashboard/:${dashboardId}`, "GET").then((res) =>
      console.log(res)
    );
  }, []);

  // console.log(dashboardId);
  // const [isLoad, setIsLoad] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("/dashboards/65532f0aaefa02bf24aa5873")
  //     .then((res) => onDataLoaded(res));
  // });

  // const onDataLoaded = (data: any) => {
  //   console.log(data);
  //   setIsLoad(true);
  // };

  // ЭТО вар, где я буду рендерить посты, когда их будет много
  // const leftSide = (
  //   <>
  //     <PinnedPosts />
  //     {isAuth && <CreatePost />}
  //     <SortPosts />
  //     {dataArray.map((item) => {
  //       return <Post image={item.pic} />;
  //     })}
  //   </>
  // );

  const leftSide = (
    <>
      <PinnedPosts />
      <SortPosts />
      <Post image="https://www.zastavki.com/pictures/1920x1080/2012/Widescreen_Russian_dolls_035029_.jpg" />
      <Post image="https://i.pinimg.com/564x/5f/84/35/5f8435b830ff436032cd1d53b0f3fdf6.jpg" />
      <Post image="https://i.pinimg.com/564x/9b/36/4e/9b364eed8278ff1abbc73d551df929b0.jpg" />
    </>
  );

  const rightSide = (
    <>
      <DashboardProfile />
      <DiscussionsList discussionsData={discissionsData} />
      <Contacts />
    </>
  );

  // if (!isLoad) {
  //   return <h1>ЗАГРУЗКА</h1>;
  // }

  return (
    <>
      <DashboardHeader
        backgroundImage={
          "https://i.pinimg.com/564x/a4/da/eb/a4daeb0714d9ccd5fe169b1f38e2197b.jpg"
        }
        avatarUrl={
          "https://i.pinimg.com/564x/43/de/5f/43de5fe54f8e7a668085f1464bf2e28e.jpg"
        }
        dashboardName="Пока что такое название"
        link="@llliiinnnkkk"
      />
      <LayoutPage leftSide={leftSide} rightSide={rightSide}></LayoutPage>
    </>
  );
};

export default DashboardPage;
