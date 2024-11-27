const ErrorMessage = ({ message }: { message: string }) => {
  return <p className="text-red-500 font-semibold">{message}</p>;
};

export default ErrorMessage;
