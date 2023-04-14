import { Image } from "react-native";
import CloudPng from '../../assets/cloud.png';

import { Button } from "../../components/Button";

import {	
	Container,
	Title, 
	TitleDescription,
	TextView,
	ImageContainer,
	TextBold
} from './styles'

export function Welcome(){
  return(
		<Container>
			<ImageContainer>
				<Image source={CloudPng}/>
			</ImageContainer>

			<TextView>
				<Title>Descubra o Clima {`\n`} na sua cidade</Title>

				<TitleDescription>	
					Com o <TextBold>FindWeather</TextBold> nunca {`\n`} ficou tão fácil ter a previsão do {`\n`} tempo na palma da sua mão 
				</TitleDescription>
			</TextView>

			<Button />
		</Container>
	)
}