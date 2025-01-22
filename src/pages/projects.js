import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from "../../public/images/projects/linea29proyecto.png";
import HireMe from '@/components/HireMe';
const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark shadow-2xl p-12 bg-light'>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-teal-900 font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link href={link} target="_blank" 
                    className='ml-4 rounded-lg bg-dark text-light d-2 px-6 text-lg font-semibold'>Project</Link>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <>
            <Head>
                <title>JY-Projects</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Innovation Drives Success" 
                    className='mb-16'
                    
                    />
                    <div className='grid grid-cols-12 gap-24'>
                        <div className='col-span-12'>
                            <FeaturedProject 
                                title="Ecomerce Linea29"
                                img={project1}
                                summary="Designed and developed a complete e-commerce website with a responsive layout, featuring a fixed footer, dynamic background, and seamless user navigation. The project included a fully functional shopping cart system, user authentication, product management, and payment integration. Ensured scalability and accessibility by implementing adaptive layouts, custom fonts, and interactive elements using modern front-end technologies like HTML5, CSS3, and JavaScript. Integrated dynamic sections, social media links, and real-time updates for an enhanced shopping experience. Focused on cross-device compatibility and optimized performance to deliver a robust and user-friendly platform."
                                link="https://linea29proyecto.netlify.app/"
                                github="https://github.com/JoseYanez047"
                                type="Featured Project"
                            />
                        </div>

                    </div>
                    <HireMe />
                </Layout>
                
                
            </main>
        </>
    );
};

export default Projects;
