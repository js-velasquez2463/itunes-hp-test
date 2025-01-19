import Button from "../../../share/components/Button";
import Input from "../../../share/components/Input";
import { FormGroupProps } from "../interfaces/AlbumInterfaces";

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  inputValue,
  onInputChange,
  buttonText,
  onButtonClick,
  isLoading,
  placeholder
}) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <Input
      className="input"
      value={inputValue}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder={placeholder}
    />
    <Button
      className="search-button"
      onClick={onButtonClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : buttonText}
    </Button>
  </div>
);
