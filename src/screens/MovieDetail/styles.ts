import styled from 'styled-components/native';
import { COLORS } from '../../theme';

export const Container = styled.ScrollView.attrs({
  vertical: true,
})`
  flex: 1;
  flex-direction: column;
  background-color: ${COLORS.BLACK_SECONDARY};
  padding: 40px 0;
  width: 100%;
  height: 100%;
`;
