import customAxios from "@/lib/customAxios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm, } from "react-hook-form";
import * as S from "./style";
import TextInput  from "../common/input/textInput";
import Button from "../common/button";

interface IFormValues {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isDirty,isValid,errors},
  } = useForm<IFormValues>({});

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    
    const { email, password, name } = data;
    customAxios.post("user/signup", { email, password, name });
  };
    useEffect(()=>{
      console.log(errors);
    })

    const name = register('name', { required: "입력해주세요" })
    const email = register('email', { required: true })
    const password = register('password', { required: true })
    const passwordCheck = register("passwordCheck", { 
      required: true,
      validate: (value) => {        
        const password = getValues("password");
        return  password === value || "비밀번호가 일치하지 않습니다.";
      },
    })

  return (
    <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <TextInput
        name={name.name}
        onChange={name.onChange}
        onBlur={name.onBlur}
        ref={name.ref}
        label="이름"
        type="text"
        placeholder="이름을 입력해주세요"
      />
      <S.EmailBox>
      <TextInput
        name={email.name}
        onChange={email.onChange}
        onBlur={email.onBlur}
        ref={email.ref}
        label="이메일"
        type="text"
        placeholder="이메일을 입력해주세요"
        />
      {/* <Button size="s" style={{marginLeft:"3px"}}>인증</Button> */}
        </S.EmailBox>
      <TextInput
        name={password.name}
        onChange={password.onChange}
        onBlur={password.onBlur}
        ref={password.ref}
        label="비밀번호"
        type="password"
        placeholder="********"
      />
      <TextInput
        name={passwordCheck.name}
        onChange={passwordCheck.onChange}
        onBlur={passwordCheck.onBlur}
        ref={passwordCheck.ref}
        type="password"
        label="비밀번호 확인"
        placeholder="********"
      />
      {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
      <Button  type={"submit"}>가입하기</Button>
    </S.SignUpForm>
  );
};

export default SignUp;
