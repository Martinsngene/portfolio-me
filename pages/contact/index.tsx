/** @format */

import Image from "next/image";
import { ImLocation, ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";

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
      <Section showHeader header='Get in touch 📞' className='bg-[#fcca46]'>
        <div className='grid grid-cols-1 gap-0 lg:gap-8 lg:grid-cols-2 w-full'>
          <div className='col-span-1 w-full'>
            <div className='relative w-full h-[200px] lg:h-[400px]'>
              <Image src='/contact.jpg' layout='fill' alt='contact' />
            </div>
            <div className={styles.contactDetails}>
              <div>
                <ImLocation />
                <a href='#'>Nigeria</a>
              </div>
              <div>
                <ImPhone />
                <a href='tel:+2349073400658'>(+234) 907-340-0658</a>
              </div>
              <div>
                <MdEmail />
                <a href='mailto:martinsngene@gmail.com'>martinsngene@gmail</a>
              </div>
            </div>
          </div>
          <div className='col-span-1 w-full flex flex-col items-center justify-center'>
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
