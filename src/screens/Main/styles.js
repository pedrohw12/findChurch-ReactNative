import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export const Botao = styled.TouchableOpacity`
  background-color: ${props=> props.favoritar ? "yellow" : "white"}
`;

export const Img = styled(Icon)`
  color: ${props=>props.index?"red":"orange"}
`;
