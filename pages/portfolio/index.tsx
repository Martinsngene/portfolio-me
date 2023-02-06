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
      <Section showHeader header='Work history 💼' className='bg-[#f4a259]'>
        <div className='flex-center'>
          <div className='align-cards'>
            {projects.map((project, index) => {
              return (
                <Card
                  // className='self-center'
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
        </div>
      </Section>
    </>
  );
};

export default index;
