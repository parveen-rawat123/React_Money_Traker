import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
import Dasboard from "./components/Dashboard/Dasboard";
import Income from "./components/Incomes/Income";
import Expence from "./components/Expense/Expence";
import { Bars3Icon } from '@heroicons/react/24/outline';

const DashBord = () => {
  const [active, setActive] = useState(1); // one is id
  const [tooglebaar, settooglebaar] = useState(false);

  const opennavigation = () => {
    if(!tooglebaar){
      settooglebaar(true);
    }else{
      settooglebaar(false);
    }
  };  

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dasboard />;
      case 2:
        return <Dasboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expence />;
      default:
        return <Dasboard />;
    }
  };

  return (
    <AppStyled className="App">
      <MainLayout>
        <Navigation
          active={active}
          setActive={setActive}
          tooglebaar={tooglebaar}
          settooglebaar={settooglebaar}
        />
        <main className={tooglebaar ? "changebg" : ""}>
          <div className="Bars3Icon">
            <Bars3Icon className="icon" onClick={opennavigation} />
          </div>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #071739;
  .changebg{
    opacity: 0.2;
  }
  main {
    flex: 1;
    background-color: #112143;
    overflow: auto;
    overflow-x: hidden;
  }
    &::-webkit-scrollbar {
      width: 0;
    }
    .Bars3Icon{
      display: none;
    }
    @media (max-width: 1024px) {
      .Bars3Icon {
        display: block;
        position: sticky;
        top: 0;
        background-color: #071739;
        color: grey;
        padding: 0.7rem 1.5rem;
        height: 3rem;
        z-index: 100;
        width: 100%;
      }
        .icon {
        height: 25px;
      }
    }
  
`;

export default DashBord;
