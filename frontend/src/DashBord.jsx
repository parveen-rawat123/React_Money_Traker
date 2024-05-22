import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import  Orb from "./components/Orb/Orb"
const DashBord = () => {
  return (
    <AppStyled  className="App">
      <MainLayout>
        <Orb/>
      </MainLayout>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image : url(bg.png);
  position : relative;
`;
export default DashBord;
