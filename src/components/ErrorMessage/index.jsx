import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
const ErrorMessage = ({ msg }) => {
  useEffect(() => {
    const toastId = toast.error(msg, {
      duration: 2000,
    });
    return () => {
      toast.remove(toastId);
    };
  }, []);
  return (
    <div>
      <Toaster
        containerStyle={{
          top: 80,
        }}
      />
    </div>
  );
};

export default ErrorMessage;
