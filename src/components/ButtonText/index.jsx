import { Container } from './styles';

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container 
      type="buton"
      isActive={isActive}
      {...rest}
    >
      {title}
    </Container>
  );
}