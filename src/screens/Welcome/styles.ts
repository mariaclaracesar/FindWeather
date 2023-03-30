import styled from 'styled-components'
import theme from '../../theme';

export const Container = styled.View`
	flex: 1;
	background-color: #1B1D22;
	justify-content: center;
	align-items: center;
`;

export const ImageContainer = styled.View``

export const TextView = styled.View`
	margin-top: 57px;
	justify-content: center;
	align-items: center;
	margin-bottom: 74px;
`;

export const Title = styled.Text`
	font-size: ${theme.fontSize.xxl33}px;
	color: ${theme.colors.white};
	font-family: ${theme.fontFamily.OverpassSemiBold};
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