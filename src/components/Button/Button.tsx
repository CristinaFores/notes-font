import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  disabled?: boolean;
  ariaLabel: string;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  styleType: "big" | "medium" | "small" | "smallest";
}

const Button = ({
  text,
  action,
  ariaLabel,
  onSubmit,
  disabled,
  styleType,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      styleType={styleType}
      onClick={action}
      aria-label={ariaLabel}
      disabled={disabled}
      onSubmit={onSubmit}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
