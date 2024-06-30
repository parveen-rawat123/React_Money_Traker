import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
const navigation = [
    { name: "Home", href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Feature', href: '' },
    { name: 'Feedback', href: '/Feedback' },
];

const Navitem = () => {
    return (
        <NavitemStyle>
            <div className="hidden lg:flex lg:gap-x-16 lg:pl-10">
                {navigation.map((item) => (
                    <NavLink key={item.id} to={item.href}  name ={item.name} className="text-md font-semibold leading-6 nav">
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </NavitemStyle>
    )
}

const NavitemStyle = styled.div`
       position: relative;  
    .nav::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 1px;
  display: block;
  border-radius: 30px;
  top: 25px;
  transition: all 0.3s ease;
}

   .nav:hover::after {
       width: ${({name})=>{
        if(name === "Home") return "10%"
        if(name === "About") return "11%"
        if(name === "Feature") return "12%"
        if(name === "Feedback") return "14%"
       }};
  height: 2px;
  background-color: #fff;
}`

export default Navitem


