/** @format */

import React from "react";
import Section from "../../components/section";
import Seo from "../../components/seo";

const index = () => {
  return (
    <>
      <Seo title='About' />
      <Section showHeader header='$whoami' className='bg-[#f4e285]'>
        <div></div>
      </Section>
    </>
  );
};

export default index;
