import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { GithubIcon, LinkedInIcon} from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[3px] inline-block w-0 bg-dark absolute left-0 bottom-0 
                group-hover:w-full transition-[width] ease duration-300 
                ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const NavBar = () => {
    return (
        <header 
        className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
            </nav>
            
            <nav className="flex space-x-4">
                <motion.a href="https://github.com/JoseYanez047" target={"_blank"}
                className="w-6 mx-3"
                whileHover={{y:-2 }}
                whileTap={{scale:0.9}}
                >
                    <GithubIcon />
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/jose-yañez-hernandez-758b3723b" target={"_blank"}
                className="w-6 mx-3"
                whileHover={{y:-2 }}
                whileTap={{scale:0.9}}
                >
                    <LinkedInIcon />
                </motion.a>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
