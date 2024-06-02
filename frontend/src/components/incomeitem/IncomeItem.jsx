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
} from "../../utils/Icons";
import { DateFormat } from "../../utils/DateFormate";

const IncomeItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  indicaterColor,
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
    <IncomeItemStyled indicator={indicaterColor}>
      <div className="icon">
        {type === "expense" ? expanceIcon() : IncomeIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="innercontent">
          <div className="text">
            <p>
              {dollar} {amount}
            </p>
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
              bRad={"30px"}
              bg={"black"}
              hColor={"blue"}
              color={"#fff"}
              onClick={() => deleteitem(id)}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
};

const IncomeItemStyled = styled.div`
  background: #fcf6f9;
  margin: 10px 40px;
  height: 5.3rem;
  width: 35rem;
  border: 2px solid #ffffff;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #222260;
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 2rem;
    }
  }
  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.2rem;
    h5 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        background: ${(props) => props.indicator};
        border-radius: 50%;
      }
    }
    .innercontent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
      .text {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: black;
        opacity: 0.8;
      }
    }
  }
`;

export default IncomeItem;
