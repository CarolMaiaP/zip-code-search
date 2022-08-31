import styled from "styled-components";

export const ContainerResult = styled.div`
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    width: 500px;
    border-radius: 8px;
  }

  main h2 {
    margin: 16px 0;
    font-size: 39px;
  }

  .main span {
    margin-bottom: 16px;
    font-weight: bold;
  }

  @media (max-width: 620px) {
    .main h2 {
      font-size: 28px;
    }

    .main {
      width: 80%;
      min-height: 250px;
    }
  }
`;
