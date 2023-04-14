import { Image } from "react-native";
import CloudPng from '../../assets/cloud.png';

import { Button } from "../../components/Button";

import {	
	Container,
	ImageContainer,
} from './styles'

export function Home(){

  return(
		<Container>
			<ImageContainer>
				<Image source={CloudPng}/>
			</ImageContainer>

		<Button
			title="OLa"
		/>
		</Container>
	)
}