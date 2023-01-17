import styled from "styled-components";
import "@fontsource/source-sans-pro";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 370px;
  border-radius: 4px;
  border-color: #d1dce3;
  background-color: rgba(209, 220, 227, 0.18);

  div {
    margin-left: 30px;
    h4 {
      width: 120px;
      height: 10px;
      color: #3d75bb;
      font-family: "Source Sans Pro";
      font-style: italic;
    }

    p {
      color: #5d9cec;
      font-size: 16px;
      font-weight: 400;
      font-family: "Source Sans Pro";
      font-style: italic;
    }

    span {
      color: #5d9cec;
      font-size: 16px;
      font-weight: 700;
      font-family: "Source Sans Pro";
      font-style: italic;
    }
  }
`;

export const LineContainer = styled.section`
  width: 150px;
  opacity: 0.3;
  background-color: #5d9cec;
  border: 1px solid #5d9cec;
`;
