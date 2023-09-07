import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, github, linkedin } from '../assets';

const Navbar = () => {

  const [ active, setActive ] = useState("");
  const [ toggle, setToggle ] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 
      ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' href='#' className='w-12 h-12 object-contain rounded-full' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>The Muscle Cat &nbsp;
            <span className='sm:block hidden'>| &nbsp;BE Developer</span>
          </p>          
        </Link>

        <div className='flex justify-center items-center gap-10'>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(Link.title)}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>

          <div className="inset-0 flex justify-end card-img_hover gap-5">
            <div 
              onClick={() => window.open("https://github.com/mysoi-2512?tab=repositories", "_blank")}
              className="black-gradient w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer"
            > 
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 onject-contain"
              />
            </div>   
            <div 
              onClick={() => window.open("https://www.linkedin.com/in/myvo-2512/", "_blank")}
              className="black-gradient w-10 h-10 rounded-xl flex justify-center items-center cursor-pointer"
            > 
              <img 
                src={linkedin}
                alt="linkedin"
                className="w-1/2 h-1/2 onject-contain"
              />
            </div>        
          </div>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[28px] h-[28px] object-contain' 
            onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((Link) => (
                  <li
                    key={Link.id}
                    className={`${
                      active === Link.title
                        ? "text-white"
                        : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle)
                      setActive(Link.title);
                    }}
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

        </div>
      </div>



    </nav>
  )
}

export default Navbar