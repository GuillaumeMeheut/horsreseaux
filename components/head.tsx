import React from "react";
import Head from "next/head";

type Props = {
  title: string;
  keywords: string;
};

export const AppHead = ({ title, keywords }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};
