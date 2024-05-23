import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext, GlobalProvider } from '../context/GlobalContext';
import Form from "../form/Form"


const Income = () => {

const {addIncome}= useGlobalContext()
    console.log(addIncome())
    console.log(GlobalProvider)
    console.log(GlobalProvider)
  return (
    <IncomeStyled>
 <InnerLayout>
    <h1>incomes</h1>
    <div className="income-content">
        <div className='form-container'></div>
      <div className="income">
      <Form/>
        </div>
    </div>
 </InnerLayout>
    </IncomeStyled>      
  )
}
const IncomeStyled = styled.div`
    

`;
export default Income
