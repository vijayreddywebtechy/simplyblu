"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";

const RHFProvider = ({
  children,
  submitFn,
  resolver,
  defaultValues = {},
  mode = "onChange",
  reValidateMode = "onChange",
}) => {
  const methods = useForm({
    resolver,
    defaultValues,
    mode,
    reValidateMode,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitFn)}>{children}</form>
    </FormProvider>
  );
};

export default RHFProvider;
