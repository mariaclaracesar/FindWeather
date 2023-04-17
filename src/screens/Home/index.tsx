import React from "react";
import { Image } from "react-native";

import LocationPng from '../../assets/location.png';
import RainingPng from '../../assets/raining.png';
import { BoxPredictions } from "../../components/BoxPredictions";

import * as S from './styles'

export function Home(){
  return(
    <S.Container>
      <S.TextContainer>
				<Image source={LocationPng}/>
        <S.Location>
           A Coruña, Espanha
        </S.Location>
      </S.TextContainer>

      <S.ContainerDate>
        <S.TextDate>
          Domingo, 01 Jan de 2023
        </S.TextDate>
      </S.ContainerDate>

      <S.ImageContainer>
        <S.ImageClimate>
				  {/* <Image source={RainingPng}/> */}
        </S.ImageClimate>
      </S.ImageContainer>

      <S.ContainerTemperature>
        <S.TextTemperature>
          23
        </S.TextTemperature>
      </S.ContainerTemperature>

      <S.ContainerTime>
        <S.TextTime>
          Chuva Moderada
        </S.TextTime>
      </S.ContainerTime>

      <BoxPredictions />

      <S.ContainerDays>
        <S.TextToday>
          Hoje
        </S.TextToday>
        <S.TextDays>
          Próximos 5 dias 
        </S.TextDays>
      </S.ContainerDays>
    </S.Container>  
  )
}