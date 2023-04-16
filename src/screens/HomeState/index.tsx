import React from 'react';
import { Image, TouchableOpacity } from "react-native";

import ClimatePng from '../../assets/climate.png';

import * as S from './styles'

export function HomeState(){

  return(
		<S.Container>
			<S.Header>
				<S.Title>Find<S.BoldText>Weather</S.BoldText></S.Title>
			</S.Header>

			<S.ImageContainer>
				<Image source={ClimatePng}/>
			</S.ImageContainer>

			<TouchableOpacity onPress={() => {}} activeOpacity={0.75}>
				<S.TitleSelect>Selecione aqui um local e{"\n"}encontre o clima em tempo real</S.TitleSelect>
			</TouchableOpacity>
		</S.Container>
	)
}