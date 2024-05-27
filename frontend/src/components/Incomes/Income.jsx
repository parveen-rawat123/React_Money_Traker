import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../context/GlobalContext";
import Form from "../form/Form";
import { useEffect } from "react";
import IncomeItem from "../incomeitem/IncomeItem";
// import {InnerLayout} from "../../styles/GlobalStyle"
// import GlobalStyle  from "../../styles/GlobalStyle"

const Income = () => {
  const { addIncome, getIncome, income , DeleteIncome} = useGlobalContext();
  useEffect(()=>{
        getIncome()
  },[income]);
  
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="income">
            {income.map((item)=>{
            const {_id,title,amount, date, category, description,} = item ; 
          return  <IncomeItem  
          key = {_id}
          id={_id}
          title = {title}
          description = {description}
          amount = {amount} date = {date}
          category = {category}
          indicaterColor={"green"}
          deleteitem= {DeleteIncome}
         />
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};
const IncomeStyled = styled.div`
           display: flex;
           .income-content{
            display: flex;
            gap: 2rem;
           }
           .income{
            flex: 1;

           }
`;
export default Income;
