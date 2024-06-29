import styled from "styled-components";
import { menuItems } from "../../utils/Menuitem";
import { signout } from "../../utils/icons/Icons";
import { useGlobalContext } from "../context/GlobalContext";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from "react";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
const Navogation = ({ active, setActive, tooglebaar, settooglebaar }) => {
  const { user } = useGlobalContext();
  const [closenav, setclosenav] = useState(false);

  useEffect(() => {
    if (!tooglebaar) {
      setclosenav(false);
    }
  }, [tooglebaar]);

  const closesiderbaar = () => {
    setclosenav(!closenav);
    settooglebaar(false)
  };

  return (
    <div>
      <Navstyle className={`${tooglebaar ? "opennav" : ""} ${closenav ? "closenav" : ""}`}>
        <div className="user-container">
          <XMarkIcon className="closeicon" onClick={closesiderbaar} />
          <div className="text">
            <img src={user && user.image ? user.image : "avatar.png"} alt="P" />
            <h2>{user ? user.username : "User"}</h2>
          </div>
        </div> 
        <ul className="menu-items">
          {menuItems.map((item) => {
            return (
              <li key={item.id}
                onClick={() => setActive(item.id)}
                className={active === item.id ? "active" : ''}
              >
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
         <li>
           <Link className="person" to="/LogIn"> <PersonIcon/> LogIn</Link>
          </li>
          <li>
          <Link className="person" to="/SignUp"> <PersonIcon/> SignUp</Link>
          </li>
        </ul>
        <div className="bottom-nav">
          <ul>
            <li>{signout} Sing Out</li>
          </ul>
        </div>
      </Navstyle>
    </div>
  );
};
const Navstyle = styled.nav`
  padding: 1rem 1.5rem;
  width: 290px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #112143;
  color: white;
  gap: 1.2rem;
  transition: transform 0.4s ease-in-out;

  .closeicon {
    display: none;
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 100;
    transform: translateX(-100%);
    
    &.opennav {
      transform: translateX(0);
    }

    &.closenav {
      transform: translateX(-100%);
    }

    .closeicon {
      display: block;
      height: 22px;
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }

  .user-container {
    position: relative;
    height: 100px;
    display: flex;
    align-items: center;

    .text {
      display: flex;
      gap: 1rem;
      align-items: center;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        background: #fcf6f9;
        border: 3px solid #0a56eb;
        padding: 0.2rem;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
      }

      h2 {
        font-size: 1.8rem;
        font-weight: 600;
      }
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  li {
    display: flex;
    gap: 1rem;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    font-weight: 600;
    position: relative;
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
  }

  i {
    margin-top: 5px;
    transition: all 0.4s ease-in-out;
  }

  .person {
    display: flex;
    gap: 15px;
  }

  .active {
    background-color: #293856;

    i {
      color: #0a56eb;
    }
  }
`;

export default Navogation;
