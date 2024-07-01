import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const navigation = [
  { name: "Home", href: '/' },
  { name: 'About', href: '/About' },
  { name: 'Feature', href: '' },
  { name: 'Feedback', href: '/Feedback' },
];

const Navitem = () => {
  return (
      <div className="hidden lg:flex lg:gap-x-16 lg:pl-10">
        {navigation.map((item, index) => (
          <StyledNavLink
            key={index}
            to={item.href}
            name={item.name}
          >
            {item.name}
          </StyledNavLink>
        ))}
      </div>
  
  );
};


const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  position: relative;
  transition: all 0.3s;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    top: 28px;
    left: 0;
    background-color: #fff;
    transition: width 0.3s;
  }

  &:hover::after {
    width: ${({ name }) => {
      switch (name) {
        case "Home":
          return "100%";
        case "About":
          return "100%";
        case "Feature":
          return "100%";
        case "Feedback":
          return "100%";
        default:
          return "12%";
      }
    }};
  }

  &:hover {
    color: #2d79e5;
  }
`;

export default Navitem;
