import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout';
import { useGlobalContext, GlobalProvider } from '../context/GlobalContext';
import Form from "../form/Form"


console.log(GlobalProvider.Income)
console.log(useGlobalContext)
const Income = () => {
  return (
    <IncomeStyled>
 <InnerLayout>
    <h1>incomes</h1>
    <div className="income-content">
        <div className='form-container'></div>
      <div className="income">
        <p className=' text-2xl text-black'>hello</p>
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
