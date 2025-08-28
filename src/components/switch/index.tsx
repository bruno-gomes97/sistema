import { Label, Toggle, Wrapper } from './style';

type SwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
};

const SwitchComponent = ({ checked, onChange, label }: SwitchProps) => {
  return (
    <Wrapper>
      <Toggle type="checkbox" checked={checked} onChange={e => onChange?.(e.target.checked)} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default SwitchComponent;
