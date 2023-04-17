import styled from 'styled-components/native'
import theme from '../../theme';

export const Container = styled.View`
  width: 328px;
  height: 76px;
  align-items: center;
  border-radius: 18px;
  border: 1px solid ${theme.colors.gray600};
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`;

export const ContainerMoisture = styled.View`
  align-items: center;
  margin-top: 10px;
  `;

export const MoisturePercentege = styled.Text`
  font-size: ${theme.fontSize.xs16}px;
  font-family: ${theme.fontFamily.OverpassBold};
  color: ${theme.colors.white};
  margin-top: 6px;
  `;

export const TextMoisture = styled.Text`
  font-size: ${theme.fontSize.xxs14}px;
  font-family: ${theme.fontFamily.OverpassLight};
  color: ${theme.colors.gray400};
  margin-bottom: 6px;
  `;

export const Line = styled.View`
  border: 1px solid #4D4D4D;
  transform: rotate(90deg);
  position: absolute;
  width: 36px;
`;



//dsplay: bloc