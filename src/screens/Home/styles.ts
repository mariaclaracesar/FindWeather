import styled from 'styled-components/native'
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.dark};
  align-items: center;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 51px;
  `;

export const Location = styled.Text`
  font-family: ${theme.fontFamily.OverpassRegular};
  font-size: ${theme.fontSize.sm18}px;
  color: ${theme.colors.white};
  margin-left: 3px;
`;

export const ContainerDate = styled.View`
margin-left: 40px;
`;

export const TextDate = styled.Text`
  font-size: ${theme.fontSize.xs16}px;
  color: ${theme.colors.gray100};
`;

export const ImageContainer = styled.View``;

export const ImageClimate = styled.View``;

export const ContainerTemperature = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const TextTemperature = styled.Text`
  font-family: ${theme.fontFamily.OverpassBold};
  font-size: ${theme.fontSize.giant76}px;
  color: ${theme.colors.white};
`;

export const ContainerTime = styled.View`
`;


export const TextTime = styled.Text`
  font-family: ${theme.fontFamily.OverpassRegular};
  font-size: ${theme.fontSize.lg30}px;
  color: ${theme.colors.gray100};
`;

export const ContainerDays = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 43px;
  justify-content: space-between;
`;

export const TextToday = styled.Text`
  font-size: ${theme.fontSize.md20}px;
  color: ${theme.colors.white};
`;

export const TextDays = styled.Text`
  font-family: ${theme.fontFamily.OverpassRegular};
  font-size: ${theme.fontSize.xs16}px;
  color: ${theme.colors.gray100};
`;
