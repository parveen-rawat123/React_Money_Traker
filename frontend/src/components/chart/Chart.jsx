import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from ".././context/GlobalContext";
import { DateFormat } from "../../utils/DateFormate";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
  const { income, expense } = useGlobalContext();
  console.log(income, "income");
  console.log(expense, "income");

  const data = {
    labels: income.map((inc) => {
      const { date } = inc;
      return DateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...income.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Expense",
        data: [
          ...expense.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
};

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

export default Chart;
