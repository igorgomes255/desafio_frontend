import { Container, LineContainer } from "./styles";

const ReceiveBox = () => {
  return (
    <Container>
      <div>
        <h4>VOCÊ RECEBERÁ:</h4>
        <LineContainer />
        <p>Amanhã: R$ 0,00</p>
        <p>Em 15 dias: R$ 0,00</p>
        <p>Em 30 dias: R$ 0,00</p>
        <p>Em 90 dias: R$ 0,00</p>
      </div>
    </Container>
  );
};

export default ReceiveBox;
