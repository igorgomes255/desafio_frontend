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
        const tomorrow: any = Object.values(response.data)[0];
        const fifteenDays: any = Object.values(response.data)[1];
        const thirtyDays: any = Object.values(response.data)[2];
        const ninetyDays: any = Object.values(response.data)[3];

        setTomorrow(tomorrow);
        setFifteenDays(fifteenDays);
        setThirtyDays(thirtyDays);
        setNinetyDays(ninetyDays);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  console.log(tomorrow);

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
