import Input from "../Input";
import ReceiveBox from "../Receive box";
import { Container, DivMargin } from "./styles";

const Anticipate = () => {
  return (
    <Container>
      <DivMargin>
        <h1>Simule sua Antecipação</h1>

        <div>
          <label>Informe o valor da venda *</label>
          <Input />
        </div>

        <div>
          <label>Em quantas parcelas *</label>
          <Input />
        </div>

        <div>
          <label>Informe o percentual de MDR *</label>
          <Input />
        </div>
      </DivMargin>
      <ReceiveBox />
    </Container>
  );
};

export default Anticipate;
