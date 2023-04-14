import * as S from './styles'

import { Image } from "react-native";

import ClimatePng from '../../assets/climate.png';

export function Home(){

  return(
		<S.Container>
			<S.Header>
				<S.Title>Find<S.BoldText>Weather</S.BoldText></S.Title>
			</S.Header>

			<S.ImageContainer>
				<Image source={ClimatePng}/>
			</S.ImageContainer>

			<S.TitleSelect>Selecione aqui um local e{`\n`}encontre o clima em tempo real</S.TitleSelect>
		</S.Container>
	)
}