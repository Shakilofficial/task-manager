"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={10}
      containerStyle={{
        zIndex: 9999,
      }}
      toastOptions={{
        duration: 3000,
        removeDelay: 500,
        style: {
          background: "var(--card)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
          borderRadius: "8px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
          padding: "12px 18px",
          fontSize: "15px",
          fontFamily: "var(--font-sans), sans-serif",
          fontWeight: 500,
          backgroundImage:
            "linear-gradient(to bottom, var(--card), var(--background))",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transition: "all 0.3s ease-out",
          cursor: "default",
        },
        success: {
          style: {
            border: "1px solid #4CAF50",
            background: "var(--card)",
            color: "var(--foreground)",
          },
          iconTheme: {
            primary: "#4CAF50",
            secondary: "var(--primary-foreground)",
          },
        },
        error: {
          style: {
            border: "1px solid var(--destructive)",
            background: "var(--card)",
            color: "var(--foreground)",
          },
          iconTheme: {
            primary: "var(--destructive)",
            secondary: "var(--primary-foreground)",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
