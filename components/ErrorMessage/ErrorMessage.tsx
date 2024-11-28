const ErrorMessage = ({ message }: { message: string }) => {
  return <p className="text-red-500 font-semibold  text-[1.1rem]">{message}</p>;
};

export default ErrorMessage;
