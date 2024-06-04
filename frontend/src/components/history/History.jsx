import styled from 'styled-components'
import { useGlobalContext } from '../context/GlobalContext';

const History = () => {
const {transactionHistory} =  useGlobalContext()

const [...history] = transactionHistory()

  return (
<HistoryStyled>
  <h2>Recent History</h2>
  {history.map((item)=>{
    const {_id, title, amount, type} = item 
      return (
        <div className='histroy-styled' key={_id}>
            <p style={{color : type === 'expense' ? 'red' : 'green'}}>
                {title}
            </p>
            <p style={{color : type === 'expense' ? 'red' : 'green'}}>
                {type === 'expense' ? `-${amount}` : `+${amount}`}
            </p>
        </div>
      )
  })}
</HistoryStyled>
  )
}

const HistoryStyled = styled.div`
       display: flex;
       flex-direction: column;
       gap: 1rem;
       .histroy-styled{
        background: #FCF6F9;
        border:  2px solid #FFFFFF;
        box-shadow: 0px ,1px, 15px rgba(0,0,0,0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h2{
        font-size: 1.7rem;
        font-weight: 600;
        color: gray;
        margin: 0;
      } 
`;

export default History