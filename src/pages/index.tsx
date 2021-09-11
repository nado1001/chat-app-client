import type { NextPage } from "next";
import Head from "next/head";
import { Box, chakra } from "@chakra-ui/react";
import { UtilBUtton } from "@/component/atoms";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>チャットルームリスト</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>チャットルームリスト</div>
        <Box>
          <chakra.h1 color="tomato">Hello World!</chakra.h1>
        </Box>
        <UtilBUtton name="ボタン" />
      </main>
    </div>
  );
};

export default Home;
