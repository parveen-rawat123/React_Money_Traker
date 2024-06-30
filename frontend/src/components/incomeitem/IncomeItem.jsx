import styled from "styled-components";
import Button from "../Button/Button";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/icons/Icons";
import { DateFormat } from "../../utils/DateFormate";

const IncomeItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  type,
  deleteitem,
}) => {
  const IncomeIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investment":
        return stocks;
      case "bitcoin":
        return bitcoin;
      case "stocks":
        return users;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expanceIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      default:
        return circle;
    }
  };

  return (
    <IncomeItemStyled>

      <div className="box">

        <div className="ruppe">
          <div className="icon">
            {type === "expense" ? expanceIcon() : IncomeIcon()}
          </div>
          <h1>{dollar} {amount}</h1>
        </div>

        <div className="content">
          <h5>Title : {title}</h5>
        </div>


        <div className="text">
          <p>
            {calender} {DateFormat(date)}
          </p>
          <p>
            {comment} {description}
          </p>
        </div>

        <div className="btn">
          <Button
            icon={trash}
            bPad={".7rem 0.8rem"}
            bRed={"30px"}
            bg={"blue"}
            color={"#fff"}
            onClick={() => deleteitem(id)}
          />
        </div>
      </div>
    </IncomeItemStyled>
  );
};

const IncomeItemStyled = styled.div`
    
    .box{
      height: 13rem;
      width: 18rem;
      border-radius: 10px;
      background-image: linear-gradient(to right, #2d79e5, #5eacf4);
      padding: 1rem;
      color: black;
      .ruppe{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3rem;
        .icon{
          font-size: 1.5rem;
        }
      }
      .btn{
        display: flex;
        padding-top: 10px;
        justify-content:flex-end;
        background-color:none;
        &:hover{
          background: none;
        }
      }
      
      .content, .text{
        font-size: 1.2rem;
        font-weight: 500;
      }
      
  }
`;

export default IncomeItem;
