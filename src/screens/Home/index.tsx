import {} from 'react-native'
import {	
	Container,
	 TextView, 
	 TextDescription
} from './styles'

export function Home(){
  return(
		<Container>
			
			<TextView>Ola</TextView>
			<TextDescription>Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão </TextDescription>
		</Container>
	)
}