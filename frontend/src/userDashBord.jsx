import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/navigation/Navigation";
import { useState, useMemo } from "react";
import Dasboard from "./components/Dashboard/Dasboard";
import Income from "./components/Incomes/Income";
import Expence from "./components/Expense/Expence";
import { GlobalProvider } from "./components/context/GlobalContext";

const DashBord = () => {
  const [active, setActive] = useState(1); // one is id

  // const Global = useGlobalContext();
  // console.log(Global);
  // console.log(GlobalProvider);

  const orbmenu = useMemo(() => {
    return <Orb />;
  }, []);

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
    <GlobalProvider>
      <AppStyled className="App">
        <MainLayout>
          {orbmenu}
          <Navigation active={active} setactive={setActive} />
          <main>{displayData()}</main>
        </MainLayout>
      </AppStyled>
    </GlobalProvider>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(bg.png);
  position: relative;
  main {
    flex: 1;
    /* background-color: rgba(252, 246, 249.78); */
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }

`;

export default DashBord;
