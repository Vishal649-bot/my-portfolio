import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SociaLink = () => {
    const links = [
        {
            id:1,
            child:(
                <>
                Linkedin
                <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkdin.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github
                <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com',
            
        },
        {
            id:3,
            child:(
                <>
                Mail
                <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto: vishalkumarkash@gmail.com',
            
        },
        {
            id:4,
            child:(
                <>
                Resume 
                <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/resume.pdf', //put Resume.pdf on the public folder
            style: 'rounded-br-md',
            download: true,
        },
       
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id,child,href,style,download}) =>(
            
        <li
        key={id}
        className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style}>
          <a href={href} className="text-white flex justify-between  items-center w-full" 
          download={download}
          target="_blank"
          rel="noreferrer"
          >
           {child}
            
          </a>
        </li>
        ))
        }

      </ul>
    </div>
  );
};

export default SociaLink;
