import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar/Sidebar";
import Center from "../components/Center/Center";
import { getSession } from "next-auth/react";
import Player from "../components/Player/Player";

const Home: NextPage = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>
      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};
