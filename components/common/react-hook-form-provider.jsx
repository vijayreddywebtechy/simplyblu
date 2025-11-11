import React from "react";
import { FormProvider } from "react-hook-form";

const RHFProvider = ({ children, methods, submitFn }) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitFn)}>{children}</form>
    </FormProvider>
  );
};

export default RHFProvider;
