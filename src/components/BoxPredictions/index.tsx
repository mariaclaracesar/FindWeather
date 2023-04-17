import React from "react";
import { Image } from "react-native";

import DropMiniaturePng from '../../assets/drop-miniature.png';

import * as S from './styles'

export function BoxPredictions(){
  return(
    <S.Container>
      <S.ContainerMoisture>
         <Image source={DropMiniaturePng}/>
         <S.MoisturePercentege>
          24%
         </S.MoisturePercentege>
         <S.TextMoisture>
          Umidade
         </S.TextMoisture>
         <S.Line /> 
      </S.ContainerMoisture>

    </S.Container>  
  )
}