import { TouchableOpacity } from 'react-native'
import {	
	Container, 
  Title
} from './styles'

export function Button(){
  return(
    <TouchableOpacity>
      <Container>
        <Title>Iniciar</Title>
      </Container>
    </TouchableOpacity>
  )
}