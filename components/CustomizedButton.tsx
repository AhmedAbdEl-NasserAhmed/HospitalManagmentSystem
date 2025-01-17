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
        paddingInline: "1rem",
        paddingBlock: "0.6rem"
      };
    default:
      return {
        padding: "1.2rem"
      };
  }
}

interface Props {
  size: string;
  children: React.ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
}

const CustomizedButton = ({ onClick, size, children, type }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={buttonStyles(size)}
      className="bg-main-gradient text-white font-bold "
    >
      {children}
    </button>
  );
};

export default CustomizedButton;
