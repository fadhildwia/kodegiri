"use client"

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import OTPInput from "react-otp-input";

type FieldValues = {
  otp: string
}

export const OTPVerify = () => {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<FieldValues>({
    reValidateMode: 'onChange',
    defaultValues: {
      otp: ""
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    localStorage.setItem("username", "Test Kodegiri")
    router.push('/')
  }

  return (
    <div className="flex flex-col w-[410px] px-6 py-8 text-center">
      <h1 className="text-3xl font-bold mb-2">Enter OTP Verification</h1>
      <p className="text-sm text-[#9A9A9A] mb-8">We’ve sent an OTP code to  +62 823403122</p>
      <div className="mb-6">
      <Controller
        control={control}
        name="otp"
        rules={{ required: true, minLength: 4 }}
        render={({ field: { onChange, value } }) => (
          <OTPInput
            value={value}
            onChange={onChange}
            numInputs={4}
            inputType="tel"
            containerStyle={{ gap: 16, justifyContent: 'center' }}
            inputStyle={{ width: 70, height: 56, borderRadius: 8 }}
            shouldAutoFocus
            renderInput={(props) => <input {...props} className="border border-1" />}
          />
        )}
      />
      </div>
      <p className="text-sm text-[#9A9A9A] mb-12">
        Didn’t  receive code? <span className="text-sm font-semibold text-[#007DFC]">Resend Code</span>
      </p>
      <Button
        disabled={!(isValid && isDirty)}
        fullWidth
        className="h-14"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </div>
  );
}
