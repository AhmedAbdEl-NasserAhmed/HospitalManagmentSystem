const OperationHourButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-white text-xl font-bold px-3 py-[2px] rounded-md shadow-sm border-2 border-borderLight"
    >
      +
    </button>
  );
};

export default OperationHourButton;
