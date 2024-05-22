
import styled, { keyframes } from "styled-components";
// import {usewindowSize} from "../";  
import { useWindowSize } from "../../utils/UseWindowSize";



const Orb = () => {

const {width,height} = useWindowSize()

console.log(width,height,"hello")

  const moveOrb = keyframes`
       0%{
            transform: translate(0,0);
        } 
        50%{
            transform: translate(${width/1.2}px,${height/1.5}px);
        }
       100%{
            transform: translate(0,0);
        }

`;

  const OrbStyled = styled.div`
    height: 70vh;
    width: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(50px);
    animation: ${moveOrb} 5s alternate linear infinite;
  `;
  return <OrbStyled></OrbStyled>;
};

export default Orb;
