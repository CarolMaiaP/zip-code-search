import styled from "styled-components";

export const ContainerSearch = styled.div`
  .title {
    font-size: 4.5rem;
    color: #fff;
    animation: flipTitle 2s;
  }

  @keyframes flipTitle {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }

  .containerInput {
    background: rgba(255, 255, 255, 0.2);
    padding: 15px;
    margin: 34px 0;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  }

  .containerInput input {
    background: transparent;
    border: 0;
    font-size: 20px;
    color: #fff;
    outline: none;
    margin-right: 8px;
  }

  .containerInput input::placeholder {
    color: #f1f1f1;
  }

  .buttonSearch {
    background: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
  }

  .buttonSearch:hover {
    transform: scale(1.3);
  }

  @media (max-width: 620px) {
    .title {
      font-size: 3rem;
    }
  }
`;
