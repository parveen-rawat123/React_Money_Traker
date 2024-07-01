import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const Toogle = () => {

  const [showButton, setshowButton] = useState(false)

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setshowButton(true)
      } else {
        setshowButton(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <>
      {showButton &&
        (<ToogleStyled onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </ToogleStyled>)
      }
    </>
  )
}

const ToogleStyled = styled.div`
        padding: 0.7rem;
        border-radius:0.6rem;
        background-color: #5ca0b9;
        display: inline-block;
        position: fixed;
        transition: opacity 0.3s ease-in-out;
        z-index: 1000;
        position: fixed;
        cursor: pointer;
        bottom: 20px;
        right: 20px;
        box-shadow: 0px 0px 5px 0px grey;
        &:hover{
          background-color: #2eabd874;
        }
`

export default Toogle;


