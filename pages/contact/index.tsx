/** @format */

import Image from "next/image";
import Section from "../../components/section";
import styles from "./styles.module.css";
import Seo from "../../components/seo";
import Input from "../../components/customInput";
import TextArea from "../../components/customTextArea";
import { Button } from "../../components/button";

const index = () => {
  return (
    <>
      <Seo title='Contact' />
      <Section showHeader header='Get in touch' className='bg-[#fcca46]'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-[47.5%] relative h-[400px]'>
            <Image src='/contact.jpg' layout='fill' alt='contact' />
          </div>
          <div className='w-[47.5%] flex flex-col items-center justify-center'>
            <div className='w-full'>
              <Input
                id='name'
                htmlFor='name'
                type='text'
                label='Name'
                placeHolder='John Doe'
              />
              <Input
                id='email'
                htmlFor='email'
                type='email'
                label='Email'
                placeHolder='abc@email.com'
              />
              <TextArea
                id='message'
                htmlFor='message'
                label='Message'
                placeHolder='Enter your message here'
              />
              <Button className={styles.button}>Send</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default index;
