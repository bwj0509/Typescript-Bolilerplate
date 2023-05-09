import * as S from 'components/Button/Button.style';

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return <S.ExButton>{children}</S.ExButton>;
};
export default Button;
