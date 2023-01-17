import { ReactNode } from "react";
import CalculatorProvider from "../context";

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return <CalculatorProvider>{children}</CalculatorProvider>;
};

export default Providers;
