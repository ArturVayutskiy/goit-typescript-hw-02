import { FC } from "react";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: FC<ErrorMessageProps> = ({ message, className }) => {
  return <div className={className}>{message}</div>;
};

export default ErrorMessage;
