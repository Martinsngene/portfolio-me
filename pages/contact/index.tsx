/** @format */

import Section from "../../components/section";
import styles from "./styles.module.css";
import Seo from "../../components/seo";

const index = () => {
  return (
    <>
      <Seo title='Contact' />
      <Section>
        <div id='contact' className='bg-[#fcca46] h-full'></div>
      </Section>
    </>
  );
};

export default index;
