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
  className?: string;
  register?: any;
};

const SelectComponent = ({ id, label, value, onChange, options, placeholder, className, register }: SelectProps) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <Select id={id} value={value} onChange={onChange} {...register}>
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
