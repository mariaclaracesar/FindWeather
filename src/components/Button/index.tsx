import * as S from './styles'
import {TouchableOpacityProps} from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  text: string;
}

export const Button = ({text, ...rest}: ButtonProps) => {
  return (
  	<S.Container {...rest}>
    	<S.Title>{text}</S.Title>
  	</S.Container>
  )
}