import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.JPG";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';


export default function Home() {
  return (
    <>
      <Head>
        <title>Jose Yanez</title>
        <meta name="description" content="" />
      </Head>
      <main className='flex items-starter text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-2/5'>
              <Image src={profilePic} alt="JMB" className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Developing your ideas with creativity and innovation." className='!text-6x1 !text-left'/> 
              <p className='my-4 text-base font-medium'>
              Early full-stack developer and pasionate data Analyst, Dedicated to explore new ideas, experience in web development and applications.
              Showcasing my expertise in React.js,Tailwind and Web development.
              </p>
              <div className="flex items-center self-start mt-2">
                  <Link href="/JoseYanez_CV2025.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  
                  "
                  download={true}
                  >Resume <LinkArrow className={"w-6 ml-1"}/>

                  </Link>
                  <Link href="mailto:joseyanez047@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                  >Contact Me</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
        </div>
      </main>
    </>
  )
}
