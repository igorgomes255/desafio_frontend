import { Container, LineContainer } from "./styles";

const ReceiveBox = () => {
  return (
    <Container>
      <div>
        <h4>VOCÊ RECEBERÁ:</h4>
        <LineContainer />
        <p>
          Amanhã: <span>R$ 0,00</span>
        </p>
        <p>
          Em 15 dias: <span>R$ 0,00</span>
        </p>
        <p>
          Em 30 dias: <span>R$ 0,00</span>
        </p>
        <p>
          Em 90 dias: <span>R$ 0,00</span>
        </p>
      </div>
    </Container>
  );
};

export default ReceiveBox;
