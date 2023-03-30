import { Image } from "react-native";
import CloudPng from '../../assets/cloud.png';

import { Button } from "../../components/Button";

import {	
	Container,
	Title, 
	TitleDescription,
	TextView,
	ImageContainer
} from './styles'

export function Welcome(){
  return(
		<Container>
			<ImageContainer>
				<Image source={CloudPng}/>
			</ImageContainer>

			<TextView>
				<Title>Descubra o clima na sua cidade
				</Title>

				<TitleDescription>	
					Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão 
				</TitleDescription>
			</TextView>

			<Button />
		</Container>
	)
}