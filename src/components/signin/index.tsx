import customAxios from "@/lib/customAxios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInForm } from "./style";
import TextInput from "../common/input/textInput";
import Button from "../common/button";

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
  const email =register('email',{required:true})
  const password = register('password',{required:true})

  return (

    <SignInForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="이메일"
        name={email.name}
        onChange={email.onChange}
        onBlur={email.onBlur}
        ref={email.ref}
        type="text"
        size="l"
        placeholder="이메일을 입력해주세요"
      />
      <TextInput
        name={password.name}
        onChange={password.onChange}
        onBlur={password.onBlur}
        ref={password.ref}
        label="비밀번호"
        type="text"
        size="l"
        placeholder="비밀번호를 입력하세요"
      />
      <Button type={"submit"}>로그인</Button>
    </SignInForm>
  );
};

export default SignIn;
