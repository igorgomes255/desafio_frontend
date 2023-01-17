import { AxiosError, AxiosResponse } from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode, useContext, useState } from "react";
import api from "../services/api";
import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";

interface IAuthProvider {
  children: ReactNode;
}

interface IData {
  amount: Number;
  installments: Number;
  mdr: Number;
}

interface ICalculatorContext {
  tomorrow: number;
  fifteenDays: number;
  thirtyDays: number;
  ninetyDays: number;
  register: UseFormRegister<IData>;
  handleSubmit: UseFormHandleSubmit<IData>;
  errors: FieldErrorsImpl<IData>;
  submitAnticipate: (data: IData) => void;
}

export const CalculatorContext = createContext({} as ICalculatorContext);

const CalculatorProvider = ({ children }: IAuthProvider) => {
  const [tomorrow, setTomorrow] = useState<number>(0);
  const [fifteenDays, setFifteenDays] = useState<number>(0);
  const [thirtyDays, setThirtyDays] = useState<number>(0);
  const [ninetyDays, setNinetyDays] = useState<number>(0);

  const schema = yup.object().shape({
    amount: yup.number().required("* Campo obrigatório"),
    installments: yup.number().required("* Campo obrigatório"),
    mdr: yup.number().required("* Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schema),
  });

  const submitAnticipate = (data: IData) => {
    api
      .post("", data)
      .then((response: AxiosResponse) => {
        setTomorrow(response.data[1]);
        setFifteenDays(response.data[15]);
        setThirtyDays(response.data[30]);
        setNinetyDays(response.data[90]);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <CalculatorContext.Provider
      value={{
        tomorrow,
        fifteenDays,
        thirtyDays,
        ninetyDays,
        register,
        handleSubmit,
        errors,
        submitAnticipate,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);

  return context;
}

export default CalculatorProvider;
