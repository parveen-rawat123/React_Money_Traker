import React from 'react'
import styled from 'styled-components'
import { calender, comment, dollar, trash } from '../../utils/Icons';
import Button from "../Button/Button";
const IncomeItem = (
   { id,title,amount, date, category, description, indicaterColor}
) => {
  return (
  <IncomeItemStyled>
      <div className="icon"></div>
      <div className="content">
        <h5>{title}</h5>
        <div className="innercontent">
        <div className='text'>
            <p> doller : {dollar}  {indicaterColor}45 </p>
            <p>{calender}{date} </p>
            <p>{comment}  {description}</p>
            <p>{category} {amount}</p>
        </div>
        <div className="btn">
        <Button
                    name={'Add income'}
                    icon={trash}
                    bPad={'.8rem 1.6rem'}
                    bRed={'30px'}
                    bg={'red'}
                    color={'#fff'}
                    // indicaterColor = {}
                />        </div>
        </div>
      </div>
  </IncomeItemStyled>
  )
}
const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.6);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;


`;
export default IncomeItem
