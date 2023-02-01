/** @format */

import Head from "next/head";
import React, { useEffect } from "react";

const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='Personal website' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Seo;
