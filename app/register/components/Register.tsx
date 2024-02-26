"use client"

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";


const mockLogin = {
  name: 'Test',
  phoneNumber: '0898234244242',
  email: 'test1@mailinator.com',
  password: '12345678'
}

type FieldValues = {
  name: string
  email: string
  phoneNumber: string
  password: string
}

export const Register = () => {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<FieldValues>({
    reValidateMode: 'onChange',
    defaultValues: {
      name: mockLogin.name,
      email: mockLogin.email,
      phoneNumber: mockLogin.phoneNumber,
      password: mockLogin.password
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => router.push('/otp')

  return (
    <div className="flex flex-col w-[410px] px-6 py-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Create an account</h1>
      <p className="text-sm text-[#9A9A9A] mb-8">New around here? Awesome choice! Let’s make it official. </p>
      <Controller
        control={control}
        name="name"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            id="name"
            name="name"
            htmlFor="name"
            type="text"
            label="Name"
            placeholder="Name"
            labelStyles="text-[#9A9A9A]"
            value={value}
            onChange={onChange}
            styles="mb-4"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            id="email"
            name="email"
            htmlFor="email"
            type="email"
            label="Email"
            placeholder="Email"
            labelStyles="text-[#9A9A9A]"
            value={value}
            onChange={onChange}
            styles="mb-4"
          />
        )}
      />
      <Controller
        control={control}
        name="phoneNumber"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            id="phoneNumber"
            name="phoneNumber"
            htmlFor="phoneNumber"
            type="text"
            label="Phone Number"
            placeholder="Phone Number"
            labelStyles="text-[#9A9A9A]"
            value={value}
            onChange={onChange}
            styles="mb-4"
            isPhoneNumber={true}
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
            name="password"
            htmlFor="password"
            type="password"
            label="Password"
            placeholder="Password"
            labelStyles="text-[#9A9A9A]"
            value={value}
            onChange={onChange}
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
        Create Account
      </Button>
      <p className="text-sm text-[#9A9A9A] mt-3">
        Have account? <span className="text-sm font-semibold text-[#007DFC] cursor-pointer" onClick={() => router.push('/login')}>Login</span>
      </p>
    </div>
  );
}
