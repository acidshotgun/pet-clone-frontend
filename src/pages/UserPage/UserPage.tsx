import PinnedPosts from "../../components/PinnedPosts/PinnedPosts";
import UserProfile from "../../components/UserProfile/UserProfile";
import DashboardsList from "../../components/DashboardsList/DashboardsList";
import CreatePost from "../../components/CreatePost/CreatePost";
import SortPosts from "../../components/SortPosts/SortPosts";
import Post from "../../components/Post/Post";

import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/useRequest";
import { useParams } from "react-router-dom";

import PageLayout from "../../components/Layout/PageLayout/PageLayout";

const fakeBoard = [
  {
    name: "Имя сообщества",
    image:
      "https://i.pinimg.com/564x/78/7f/56/787f56daf00fc04d0b75c2d7c6f4422f.jpg",
    boardId: "@comm_name",
    descr: "Some descr ;))",
    boardLink: "65532f0aaefa02bf24aa5873",
  },
  {
    name: "Имя сообщества",
    image:
      "https://i.pinimg.com/564x/78/7f/56/787f56daf00fc04d0b75c2d7c6f4422f.jpg",
    boardId: "@comm_name",
    descr: "Some descr ;))",
    boardLink: "65532f0aaefa02bf24aa5873",
  },
  {
    name: "Имя сообщества",
    image:
      "https://i.pinimg.com/564x/78/7f/56/787f56daf00fc04d0b75c2d7c6f4422f.jpg",
    boardId: "@comm_name",
    descr: "Some descr ;))",
    boardLink: "65532f0aaefa02bf24aa5873",
  },
  {
    name: "Имя сообщества",
    image:
      "https://i.pinimg.com/564x/78/7f/56/787f56daf00fc04d0b75c2d7c6f4422f.jpg",
    boardId: "@comm_name",
    descr: "Some descr ;))",
    boardLink: "65532f0aaefa02bf24aa5873",
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

interface UserData {
  pinnedPosts: [];
  logoUrl: string;
  createdPosts: ICreatedPostItem[];
  description: string;
  createdAt: string;
  backgroundImage?: string;
  nickName: string;
  avatarUrl: string;
  subscribers: any[];
  subscriptions: any[];
  name: any;
  subscribedDashboards: any[];
}

const UserPage = () => {
  const [userPageData, setUserPageData] = useState<UserData | null>(null);
  const { request, loading, error } = useHttp();
  const { userId } = useParams();
  const isAuth = true;

  useEffect(() => {
    request(`/users/${userId}`, "GET").then((res: any) =>
      setUserPageData(res.data)
    );
  }, []);

  const leftSide = (
    <>
      <PinnedPosts />
      {isAuth && <CreatePost />}

      {userPageData && userPageData.createdPosts?.length > 0 ? (
        <>
          <SortPosts />
          {userPageData.createdPosts.map((createdPostitem, i) => {
            return (
              <Post
                logoUrl={userPageData.avatarUrl}
                name={userPageData.nickName}
                postData={createdPostitem}
                key={i}
              />
            );
          })}
        </>
      ) : (
        <h1>ПОстов пока нет</h1>
      )}
    </>
  );

  const rightSide = (
    <>
      <UserProfile
        backgroundImage={userPageData?.backgroundImage}
        nickName={userPageData?.nickName}
        avatarUrl={userPageData?.avatarUrl}
        subscribers={userPageData?.subscribers}
        subscriptions={userPageData?.subscriptions}
      />
      <DashboardsList
        data={userPageData?.subscribedDashboards}
        isLoading={loading}
      />
    </>
  );

  console.log(loading);

  if (loading) {
    return <h1>ЗАГРУЗКА</h1>;
  }

  return <PageLayout leftSide={leftSide} rightSide={rightSide}></PageLayout>;
};

export default UserPage;
