import { Container, Label, Select } from './style';

type Option = {
  value?: string | number;
  label?: string;
};

type SelectProps = {
  id?: string;
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: Option[];
  placeholder?: string;
};

const SelectComponent = ({ id, label, value, onChange, options, placeholder }: SelectProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Select id={id} value={value} onChange={onChange}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options?.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default SelectComponent;
