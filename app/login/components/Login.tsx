"use client"

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useRouter } from "next/navigation"
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const mockLogin = {
  email: 'test1@mailinator.com',
  password: '12345678'
}

type FieldValues = {
  email: string
  password: string
}

export const Login = () => {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<FieldValues>({
    reValidateMode: 'onChange',
    defaultValues: {
      email: mockLogin.email,
      password: mockLogin.password,
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => router.push('/otp')

  return (
    <div className="flex flex-col w-[410px] px-6 py-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Let’s sign You in.</h1>
      <p className="text-sm text-[#9A9A9A] mb-8">Hey there, fabulous! Ready to kick back and explore? Just a quick sign-in away from unlocking a world of fun.</p>
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            id="email"
            htmlFor="email"
            type="email"
            name="email"
            label="Email"
            value={value}
            onChange={onChange}
            placeholder="Email"
            labelStyles="text-[#9A9A9A]"
            styles="mb-4"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            id="password"
            htmlFor="password"
            type="password"
            name="password"
            label="Password"
            value={value}
            onChange={onChange}
            placeholder="Password"
            labelStyles="text-[#9A9A9A]"
            styles="mb-4"
          />
        )}
      />
      <p className="text-sm text-start text-[#9A9A9A] mb-12">
        Forgot password? <span className="text-sm font-semibold text-[#007DFC] cursor-pointer">Reset Password</span>
      </p>
      <Button
        disabled={!isValid}
        fullWidth
        className="h-14"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Sign In
      </Button>
      <p className="text-sm text-[#9A9A9A] mt-3">
        Haven’t registered yet? <span className="text-sm font-semibold text-[#007DFC] cursor-pointer" onClick={() => router.push('/register')}>Register</span>
      </p>
    </div>
  );
}
