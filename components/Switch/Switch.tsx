import Switch from "react-switch";

const SwitchInput = ({
  onChange,
  value
}: {
  onChange: (value?: boolean) => void;
  value: boolean;
}) => {
  return (
    <Switch
      width={45}
      handleDiameter={20}
      height={24}
      onColor="#45CC9C"
      offColor="#DCE0E5"
      checkedIcon={false}
      uncheckedIcon={false}
      onChange={onChange}
      checked={value}
    />
  );
};

export default SwitchInput;
