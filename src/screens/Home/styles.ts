import styled from 'styled-components/native';
import { COLORS } from '../../theme';

export const Container = styled.ScrollView.attrs({
  vertical: true,
})`
  flex: 1;
  background-color: ${COLORS.BLACK_SECONDARY};
  padding: 50px 14px;
`;


