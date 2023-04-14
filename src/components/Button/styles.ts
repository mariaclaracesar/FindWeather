import styled from 'styled-components'
import theme from '../../theme';

export const Container = styled.View`
	width: 328px;
	height: 54px;
	background-color: ${theme.colors.dark300};
	border: 1px solid #838384;
	border-radius: 18px;
	justify-content: center;
	align-items: center;
	margin-bottom: 54px;
`;

export const Title = styled.Text`
	color: ${theme.colors.white};
	font-size: ${theme.fontSize.md22}px;
	font-family: ${theme.fontFamily.OverpassRegular};
`;
