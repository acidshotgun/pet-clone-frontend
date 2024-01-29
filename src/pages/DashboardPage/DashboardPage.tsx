import PinnedPosts from "../../components/PinnedPosts/PinnedPosts";
import DiscussionsList from "../../components/DiscussionsList/DiscussionsList";
import Contacts from "../../components/Contacts/Contacts";
import SortPosts from "../../components/SortPosts/SortPosts";
import Post from "../../components/Post/Post";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import DashboardProfile from "../../components/DashboardProfile/DashboardProfile";

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

interface DashboardData {
  pinnedPosts: any[]; // Замените any на реальный тип вашего поста
  logoUrl: string;
  dashboardName: string;
  createdPosts: any[]; // Замените any на реальный тип вашего поста
  description: string;
  createdAt: string; // Предположим, что это строка с датой
  backgroundUrl: string;
  admins: string[];
}

const DashboardPage = () => {
  const [dasboardPageData, setDashboardPageData] =
    useState<DashboardData | null>(null);
  const { request, loading, error } = useHttp();
  const { dashboardId } = useParams();

  useEffect(() => {
    request(`/dashboards/${dashboardId}`, "GET").then((res: any) =>
      setDashboardPageData(res.data)
    );
  }, []);

  useEffect(() => {
    console.log(dasboardPageData);
  }, [dasboardPageData]);

  const leftSide = (
    <>
      {dasboardPageData?.pinnedPosts &&
      dasboardPageData?.pinnedPosts.length > 0 ? (
        <PinnedPosts />
      ) : null}
      <>
        {/* {dasboardPageData?.createdPosts &&
          dasboardPageData.createdPosts?.length > 0 && <SortPosts />} */}
        {dasboardPageData?.createdPosts &&
        dasboardPageData.createdPosts?.length > 0 ? (
          <SortPosts />
        ) : (
          <h1>ПОстов пока нет</h1>
        )}
        {dasboardPageData?.createdPosts.map((item: any, i: any) => {
          return (
            <Post
              logoUrl={dasboardPageData?.logoUrl}
              name={dasboardPageData?.dashboardName}
              postData={item}
              key={i}
            />
          );
        })}
      </>
    </>
  );

  const rightSide = (
    <>
      <DashboardProfile
        description={dasboardPageData?.description}
        createdAt={dasboardPageData?.createdAt}
      />
      <DiscussionsList discussionsData={discissionsData} />
      <Contacts admins={dasboardPageData?.admins} />
    </>
  );

  if (loading) {
    return <h1>ЗАГРУЗКА</h1>;
  }

  return (
    <>
      <DashboardHeader
        backgroundImage={dasboardPageData?.backgroundUrl}
        avatarUrl={dasboardPageData?.logoUrl}
        dashboardName={dasboardPageData?.dashboardName}
        link="@llliiinnnkkk"
      />
      <LayoutPage leftSide={leftSide} rightSide={rightSide}></LayoutPage>
    </>
  );
};

export default DashboardPage;
