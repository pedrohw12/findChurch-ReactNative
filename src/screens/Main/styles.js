import styled from 'styled-components/native';

export const Botao = styled.TouchableOpacity`
  background-color: ${props=> props.favoritar ? "yellow" : "white"}
`;
