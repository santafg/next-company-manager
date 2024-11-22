"use client"
import React from "react";
import { SnackbarProvider } from "notistack";

const ToastWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      preventDuplicate
    >
      {children}
    </SnackbarProvider>
  );
};

export default ToastWrapper;
