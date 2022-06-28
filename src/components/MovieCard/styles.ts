import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../theme';

export const Container = styled.View`
  flex: 1;
  align-items: flex-start;
`

export const MovieTitle = styled.Text`
  font-family: ${FONTS.REGULAR};
  font-size: 12px;
  color: ${COLORS.WHITE};
  margin-top: 10px;
`
export const Button = styled.TouchableOpacity`
  margin-right: 10px;
`