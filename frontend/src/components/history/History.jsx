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
            <p style={{color : type === 'expense' ? 'blue' : 'black'}}>
                {title}
            </p>
            <p style={{color : type === 'expense' ? 'blue' : 'black'}}>
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
        background-image: linear-gradient(to right, #e2970f, #f2ca28); 
        box-shadow: 0px ,1px, 15px rgba(0,0,0,0.06);
        padding: 1rem;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          font-weight: 600;
          font-size: 1.2rem;
        }
      }
      h2{
        font-size: 1.7rem;
        font-weight: 600;
        margin: 0;
      } 
`;

export default History
