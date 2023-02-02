/** @format */

import React from "react";
import Card from "../../components/card";
import { projects } from "../../components/constants/Portfolio.Schema";
import Section from "../../components/section";
import Seo from "../../components/seo";

const index = () => {
  return (
    <>
      <Seo title='Portfolio' />
      <Section className='bg-[#f4a259]'>
        <div className='grid grid-cols-1 lg:grid-cols-4 h-fit px-[3rem] py-[3rem]'>
          {projects.map((project, index) => {
            return (
              <Card
                className='my-2 lg:my-8'
                key={index}
                imgUrl={project.imgUrl}
                link={project.link}
                linkLabel={project.linkLabel}
                description={project.description}
                name={project.name}
              />
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default index;
