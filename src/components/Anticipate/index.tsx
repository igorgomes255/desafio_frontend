import Input from "../Input";
import ReceiveBox from "../Receive box";
import { Container, DivMargin, DivInput } from "./styles";

const Anticipate = () => {
  return (
    <Container>
      <DivMargin>
        <h1>Simule sua Antecipação</h1>

        <DivInput>
          <label>Informe o valor da venda *</label>
          <Input />
        </DivInput>

        <DivInput>
          <label>Em quantas parcelas *</label>
          <Input />
        </DivInput>

        <DivInput>
          <label>Informe o percentual de MDR *</label>
          <Input />
        </DivInput>
      </DivMargin>
      <ReceiveBox />
    </Container>
  );
};

export default Anticipate;
