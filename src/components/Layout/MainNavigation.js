import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react'; 
import AuthContext from '../../store/auth-context';
import React, { useEffect, useState } from 'react';
import {Image} from "../../constants/Images"; 
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';
import { Drawer, makeStyles } from '@material-ui/core';
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

// use for drawer comming left slide
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
  },
}));

const MainNavigation = () => {

  const history = useHistory();
  const authCtx = useContext(AuthContext); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const classes = useStyles();

  const handleLogout = () => {
    authCtx.logout();
    history.replace('/auth'); // Redirect to the login page after logout
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setIsFixed(true);
      } else {
        setIsScrolled(false);
        setIsFixed(false);
      }
    
       
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const colorStyle = {
    color:!isScrolled || !isFixed ? ' ' : '  rgba(255, 255, 255, 0.55) ',// Set the color based on isScrolled and isFixed states
  };
  

  return (
    <header  

    style={{
      backdropFilter: 'blur(6px)',
      background: !isScrolled || !isFixed ? 'rgba(139, 172, 170, 0.3)' : 'transparent',
      borderBottom: !isScrolled || !isFixed ? '1px solid rgba(255, 255, 255, 0.65)' : '1px solid rgba(255, 255, 255, 0.25) ',
      
      position: isFixed ? 'fixed' : 'relative',
      top: isFixed ? '0' : 'auto', 
      zIndex:100
    }}
    className=" w-full h-24  flex  justify-between items-center">

    <Link to='/' className='flex px-10'>
      {/* <div className=" ml-2 text-3xl text-white m-0">Evrima</div> */}
      <img src={Image.Evrima} className='w-[40px] md:w-[50px]  ' alt='logo' />
      
    </Link>

    <Menu color={colorStyle}/>

    <Drawer
      anchor="left" // Set the anchor to the left side
      open={mobileMenu}
      onClose={() => setMobileMenu(false)}
      classes={{
        paper: classes.drawerPaper, // Use the defined styles for the paper
      }}>
        <MobileMenu setMobileMenu={setMobileMenu}/>

    </Drawer>
  


     {/* Mobile icon start */}
     <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center
        items-center bg-red-100 hover:bg-black/[0.05] cursor-pointer relative mr-2 "> 
        {/*  ///////////////////////////////////////////////
        because of the using medium size to change menu visible , 
        toggle icon also hidden after medium  [  md:hidden ]
        ///////////////////////////////////////////////////
          */}
          {mobileMenu ? (
              <VscChromeClose
                  className="text-[16px]"
                  onClick={() => setMobileMenu(false)}
              />
          ) : (
              <BiMenuAltRight
                  className="text-[20px]"
                  onClick={() => setMobileMenu(true)}
              />
          )}
      </div>
      {/* Mobile icon end */}

             
    </header>
  );
};

export default MainNavigation;
