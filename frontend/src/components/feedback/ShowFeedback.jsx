import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import styled from "styled-components";

const ShowFeedback = () => {
  const { getFeedback, getFeedbacks } = useGlobalContext();

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <FeedbackStyled>
      <h1 className="main-heading paramain">User Feedback</h1>
      <div className="logos-container paramain ">
        <div className="logos-slide">
          {getFeedbacks.map((item1) => (
            <div key={item1.id} className="feedback-item">
              <h2 className="username">{item1.username}</h2>
              <p className="feedback-text">{item1.feedback}</p>
            </div>
          ))}
          {getFeedbacks.map((item2) => (
            <div key={item2.id} className="feedback-item">
              <h2 className="username">{item2.username}</h2>
              <p className="feedback-text">{item2.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </FeedbackStyled>
  );
};

const FeedbackStyled = styled.div`
  overflow: hidden;
  padding: 50px 0;
  background-color: #d8eef6;
  position: relative;

  .main-heading {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .logos-container {
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .logos-slide {
    display: flex;
    animation: slide 35s linear infinite;
    cursor: pointer;

    &:hover {
      animation-play-state: paused;
    }
  }

  .feedback-item {
    width: 300px;
    overflow: hidden;
    min-height: 170px;
    padding: 10px;
    border-radius: 10px;
    margin: 0 10px;
    background-color: #7dc8e3;
  }

  .feedback-text {
    text-overflow: ellipsis;
  }
  .username {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .feedback-text {
    font-size: 1rem;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
  }

  &::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
  }

  @media (max-width: 768px) {
    .main-heading {
      font-size: 1.5rem;
    }

    .feedback-item {
      min-width: 150px;
      min-height: 80px;
      padding: 8px;
      margin: 0 5px;
    }

    .username {
      font-size: 1rem;
    }

    .feedback-text {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .main-heading {
      font-size: 1.2rem;
    }

    .feedback-item {
      width: 200px;
      height: 100px;
      padding: 5px;
      margin: 0 3px;
    }
    &::before,
    &::after {
      position: absolute;
      top: 0;
      width: 100px;
      height: 100%;
      content: "";
      z-index: 2;
    }
    .username {
      font-size: 0.8rem;
    }

    .feedback-text {
      font-size: 0.7rem;
    }
  }
`;

export default ShowFeedback;
