import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
  height: 370px;
  border: 1px solid #d1dce3;
  border-radius: 4px;

  h1 {
    color: #656565;
    font-size: 24px;
    font-family: "Source Sans Pro";
    margin-bottom: 30px;
  }

  label {
    color: #656565;
    font-size: 18px;
    font-family: "Source Sans Pro";
  }
`;

export const DivMargin = styled.div`
  margin-left: 56px;
`;

export const DivInput = styled.div`
  margin-top: 15px;
`;
