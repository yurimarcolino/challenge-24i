import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../theme';

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0px 10px;
`
export const Sinopse = styled.Text`
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.GRAY_SECONDARY};
  margin-top: 20px;
`

export const MovieDetailsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`
export const MovieDetailsInfo = styled.Text`
  color: ${COLORS.GRAY_PRIMARY};
  font-family: ${FONTS.BOLD};
  font-size: 16px;
  margin-top: 15px;
`
export const MovieDetailsData = styled.Text`
  color: ${COLORS.GRAY_SECONDARY};
  font-family: ${FONTS.REGULAR};
  font-size: 12px;
  margin-top: 15px;
`
