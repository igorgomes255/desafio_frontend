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

  form {
    input[type="submit"] {
      visibility: hidden;
      width: 1px;
      height: 1px;
    }
  }
`;

export const DivMargin = styled.div`
  margin-left: 56px;
`;

export const DivInput = styled.div`
  margin-top: 15px;

  input {
    width: 230px;
    height: 38px;
    border-radius: 4px;

    border: 1px solid #dde6e9;
  }
`;
