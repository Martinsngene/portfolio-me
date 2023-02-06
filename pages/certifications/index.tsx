/** @format */

import React from "react";
import Card from "../../components/card";
import { certifications } from "../../components/constants/Certifications.Schema";
import Section from "../../components/section";
import Seo from "../../components/seo";

const index = () => {
  return (
    <>
      <Seo title='Certifications' />
      <Section showHeader header="I'm certified 👨‍🎓" className='bg-[#bc4b51]'>
        <div className='flex-center'>
          <div className='align-cards'>
            {certifications.map((certificate, index) => {
              return (
                <Card
                  className='my-2 lg:my-8'
                  key={index}
                  imgUrl={certificate.imgUrl}
                  link={certificate.link}
                  linkLabel={certificate.linkLabel}
                  description={certificate.description}
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
