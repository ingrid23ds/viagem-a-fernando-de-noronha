import {View,Text,StyleSheet} from 'react-native'


export default function Title(){
  return(
    <View>
    <Text style={styles.subtitulo}>Explore as Maravilhosas Praias</Text>
    <Text style={styles.texto}>Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turqueza</Text>
    </View>
  )
}



const styles = StyleSheet.creat({
  subtitulo: {
    backgroundcolor: 'darkorange',
    fontWeight: 'bolde',
    color: 'white',
    height: 40,
    textAlign: 'center',
    padding: 10,

  },
})

  
