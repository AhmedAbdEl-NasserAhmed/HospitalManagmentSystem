function buttonStyles(size: string) {
  switch (size) {
    case "large":
      return {
        width: "100%",
        borderRadius: "0.6rem",
        padding: "1.2rem"
      };
    case "small":
      return {
        borderRadius: "0.6rem",
        paddingInline: "1.4rem",
        paddingBlock: "0.6rem"
      };
    default:
      return {
        padding: "1.2rem"
      };
  }
}

const CustomizedButton = ({
  onClick,
  size,
  children,
  type,
  disabled,
  className
}: {
  size: string;
  children: React.ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      style={buttonStyles(size)}
      className={`${
        disabled ? "bg-borderLight cursor-not-allowed" : "bg-main-gradient"
      } text-white font-bold ${className} `}
    >
      {children}
    </button>
  );
};

export default CustomizedButton;
