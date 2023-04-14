import styled from 'styled-components'
import theme from '../../theme';

export const Container = styled.View`
	flex: 1;
	background-color: ${theme.colors.dark};
	justify-content: center;
	align-items: center;
`;

export const ImageContainer = styled.View`
	margin-top: 113px;
`

export const TextView = styled.View`
	margin-top: 57px;
	justify-content: center;
	align-items: center;
	margin-bottom: 74px;
`;

export const TextBold = styled.Text`
	color: ${theme.colors.gray200};
	font-family: ${theme.fontFamily.OverpassSemiBold};
`;


export const Title = styled.Text`
	font-size: ${theme.fontSize.xxl33}px;
	color: ${theme.colors.white};
	font-family: ${theme.fontFamily.OverpassSemiBold};
	display: flex;
	align-items: center;
	text-align: center;
`;

export const TitleDescription = styled.Text`
	font-family: ${theme.fontFamily.OverpassRegular};
	font-size: ${theme.fontSize.md22}px;;
	color: ${theme.colors.gray100};
	margin-top: 33px;
	line-height: 28px;
	display: flex;
	align-items: center;
	text-align: center;
`;