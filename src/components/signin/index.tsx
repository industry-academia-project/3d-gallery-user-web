import customAxios from "@/lib/customAxios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInForm } from "./style";

interface IFormValues {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormValues>({});

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const { email, password } = data;
    customAxios.post("user/login", { email, password });
  };

  return (
    <SignInForm onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: true })}
        type="text"
        placeholder="이메일을 입력해주세요"
      />
      <button>인증하기</button>
      <input
        {...register("password", { required: true })}
        type="text"
        placeholder="비밀번호를 입력하세요"
      />
      <button type={"submit"}>가입하기</button>
    </SignInForm>
  );
};

export default SignIn;
