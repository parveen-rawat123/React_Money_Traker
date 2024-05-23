import styled from "styled-components";
import { menuItems } from "../../utils/Menuitem";
import { signout } from "../../utils/Icons";
const Navogation = ({ active, setactive }) => {
  return (
    <div>
      <Navstyle>
        <div className="user-container">
          <img src="avatar.png" alt="" />
          <div className="text">
            <h2>Mike</h2>
            <p>Your Money</p>
          </div>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => {
            return (
              <li key={item.id}
                onClick={() => setactive(item.id)}
                className={active === item.id ? "active" : ''}
              >
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div className="bottom-nav">
          <ul>
            <li>{signout}</li>
            <li>Sing Out</li>
          </ul>
        </div>
      </Navstyle>
    </div>
  );
};
const Navstyle = styled.nav`
  padding: 2rem 1.5rem;
  width: 290px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-container {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
      font-size: 2.1rem;
      font-weight: 600;
    }
    p {
      color: rgba(34, 34, 96, 1);
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    gap: 1rem;
    padding-left: 10px;
    font-size: 1.1rem;
    color: rgba(34, 34, 96, 0.6);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    font-weight: 600;
    position: relative;
    margin: 0.3rem;

  }
  i{
    margin-top: 5px;
    color: rgba(34, 34, 96, 0.6);
    transition: all 0.4s ease-in-out;
     }.active{
     color:  rgb(34,34,96,1);
     i{
       color:  rgb(34,34,96,1);
     }
     &::before{
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      width: 4px;
      height: 100%;
      background-color: #222260;
      border-radius: 0 10px 10px 0;
     }
     .bottom-nav{
      display: flex;
      background-color: #222260;
      flex-direction: row;
     }
  }
`;

export default Navogation;
