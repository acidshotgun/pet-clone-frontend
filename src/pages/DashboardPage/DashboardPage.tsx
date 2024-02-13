import PinnedPosts from "../../components/PinnedPosts/PinnedPosts";
import DiscussionsList from "../../components/DiscussionsList/DiscussionsList";
import Contacts from "../../components/Contacts/Contacts";
import SortPosts from "../../components/SortPosts/SortPosts";
import Post from "../../components/Post/Post";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import DashboardProfile from "../../components/DashboardProfile/DashboardProfile";

import LayoutPage from "../../components/Layout/PageLayout/PageLayout";
import Page404 from "../404/Page404";

import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/useRequest";
import { useParams } from "react-router-dom";

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

interface ICreatedPostItem {
  author: string;
  comments: string[];
  createdAt: string;
  imageUrl: string;
  likesCounter: number;
  tags: string[];
  text: string;
  title: string;
  updatedAt: string;
  viewCounter: number;
}

interface IDashboardData {
  pinnedPosts: [];
  logoUrl: string;
  dashboardName: string;
  createdPosts: ICreatedPostItem[];
  description: string;
  createdAt: string;
  backgroundUrl: string;
  admins: string[];
}

const DashboardPage = () => {
  const [dasboardPageData, setDashboardPageData] =
    useState<IDashboardData | null>(null);
  const { request, loading, error } = useHttp();
  const { dashboardId } = useParams();

  useEffect(() => {
    request(`/dashboards/${dashboardId}`, "GET").then((res: any) =>
      setDashboardPageData(res?.data)
    );
  }, []);

  const leftSide = (
    <>
      {/* {dasboardPageData && dasboardPageData.pinnedPosts.length > 0 ? (
        <PinnedPosts />
      ) : null} */}

      <PinnedPosts />

      {dasboardPageData && dasboardPageData.createdPosts.length > 0 ? (
        <>
          <SortPosts />
          {dasboardPageData.createdPosts.map((createdPostitem, i) => {
            return (
              <Post
                logoUrl={dasboardPageData.logoUrl}
                name={dasboardPageData.dashboardName}
                postData={createdPostitem}
                key={i}
              />
            );
          })}
        </>
      ) : (
        <h1>Постов пока нет</h1>
      )}
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

  if (!dasboardPageData) {
    return <Page404 />;
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
