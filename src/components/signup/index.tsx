import customAxios from "@/lib/customAxios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpForm } from "./style";

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
    formState: { errors },
  } = useForm<IFormValues>({});

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const { email, password, name } = data;
    customAxios.post("user/signup", { email, password, name });
  };

  return (
    <SignUpForm onSubmit={handleSubmit(onSubmit)}>
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
      <input
        {...register("passwordCheck", {
          required: true,
          validate: (value) => {
            const password = getValues("password");
            return value === password || "비밀번호가 일치하지 않습니다.";
          },
        })}
        type="text"
        placeholder="비밀번호를 다시 입력하세요"
      />
      {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="이름을 적어주세요"
      />
      <button type={"submit"}>가입하기</button>
    </SignUpForm>
  );
};

export default SignUp;
