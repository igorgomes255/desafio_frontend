import { useCalculatorContext } from "../../context";
import { Container, LineContainer } from "./styles";

const ReceiveBox = () => {
  const { tomorrow, fifteenDays, thirtyDays, ninetyDays } =
    useCalculatorContext();

  return (
    <Container>
      <div>
        <h4>VOCÊ RECEBERÁ:</h4>
        <LineContainer />

        <li>
          <p>
            Amanhã: <span>R$ {tomorrow},00</span>
          </p>
          <p>
            Em 15 dias: <span>R$ {fifteenDays},00</span>
          </p>
          <p>
            Em 30 dias: <span>R$ {thirtyDays},00</span>
          </p>
          <p>
            Em 90 dias: <span>R$ {ninetyDays},00</span>
          </p>
        </li>
      </div>
    </Container>
  );
};

export default ReceiveBox;
