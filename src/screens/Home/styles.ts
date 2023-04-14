import styled from 'styled-components/native'
import theme from '../../theme';

export const Container = styled.View`
	flex: 1;
	background-color: ${theme.colors.dark};
	justify-content: center;
	align-items: center;
`;

export const Header = styled.View`
`;

export const Title = styled.Text`
	font-size: ${theme.fontSize.xxl33}px;
	font-family: ${theme.fontFamily.OverpassRegular};
	color: ${theme.colors.white};
`;

export const BoldText = styled.Text`
	color: ${theme.colors.white};
	font-family: ${theme.fontFamily.OverpassBold};
`;

export const ImageContainer = styled.View`
	margin-top: 105px;
`;

export const TitleSelect = styled.Text`
	margin-top: 105px;
	font-family: ${theme.fontFamily.OverpassRegular};
	font-size: ${theme.fontSize.md22}px;
	text-decoration-line: underline;
	color: ${theme.colors.gray100};
`;


