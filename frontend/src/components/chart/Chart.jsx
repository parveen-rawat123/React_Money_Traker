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

  const data = {
    labels: income.map((inc) => {
      const { date } = inc;
      return DateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: income.map((income) => {
          const { amount } = income;
          return amount;
        }),
        backgroundColor: "green",
        borderColor: "green",
        tension: 0.2,
      },
      {
        label: "Expense",
        data: expense.map((expense) => {
          const { amount } = expense;
          return amount;
        }),
        backgroundColor: "red",
        borderColor: "red",
        tension: 0.2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
      y: {
        ticks: {
          color: "#ffffff", 
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", 
        },
      },
      tooltip: {
        titleColor: "#ffffff", 
        bodyColor: "#ffffff", 
        backgroundColor: "rgba(0, 0, 0, 0.8)", 
      },
    },
  };

  return (
    <ChartStyled>
      <Line data={data} options={options} />
    </ChartStyled>
  );
};

const ChartStyled = styled.div`
  background: #1b52ba;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 10px;
`;

export default Chart;
