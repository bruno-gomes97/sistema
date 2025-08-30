import { Label, Toggle, Wrapper } from './style';

type SwitchProps = {
  checked?: boolean;
  label?: string;
  register?: any;
};

const SwitchComponent = ({ checked, label, register }: SwitchProps) => {
  return (
    <Wrapper>
      <Toggle type="checkbox" checked={checked} {...register} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default SwitchComponent;
