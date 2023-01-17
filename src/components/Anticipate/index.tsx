import { useCalculatorContext } from "../../context";
import ReceiveBox from "../Receive box";
import { Container, DivMargin, DivInput } from "./styles";

const Anticipate = () => {
  const { register, handleSubmit, errors, submitAnticipate } =
    useCalculatorContext();
  return (
    <Container>
      <DivMargin>
        <h1>Simule sua Antecipação</h1>
        <form onSubmit={handleSubmit(submitAnticipate)}>
          <DivInput>
            <label>Informe o valor da venda *</label>
            <input
              placeholder={errors.amount?.message}
              {...register("amount")}
            />
          </DivInput>

          <DivInput>
            <label>Em quantas parcelas *</label>
            <input
              placeholder={errors.installments?.message}
              {...register("installments")}
            />
          </DivInput>

          <DivInput>
            <label>Informe o percentual de MDR *</label>
            <input placeholder={errors.mdr?.message} {...register("mdr")} />
          </DivInput>
          <input type="submit" />
        </form>
      </DivMargin>
      <ReceiveBox />
    </Container>
  );
};

export default Anticipate;
