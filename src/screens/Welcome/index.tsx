import { Image } from "react-native";
import CloudPng from '../../assets/cloud.png';

import { Button } from "../../components/Button";

import * as S from './styles'

export function Welcome({ navigation }){

	function handleClickIncial(){
		navigation.navigate('Home')
}

  return(
		<S.Container>
			<S.ImageContainer>
				<Image source={CloudPng}/>
			</S.ImageContainer>

			<S.TextView>
			<S.Title>Descubra o Clima {`\n`} na sua cidade</S.Title>

			<S.TitleDescription>	
				Com o <S.TextBold>FindWeather</S.TextBold> nunca {`\n`} ficou tão fácil ter a previsão do {`\n`} tempo na palma da sua mão 
			</S.TitleDescription>
		</S.TextView>

		<Button
			text="Iniciar"
			onPress={handleClickIncial}
		/>
		</S.Container>
	)
}