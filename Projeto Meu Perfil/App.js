import {Text, SafeAreaView, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 50}
});

export default function App() {
  
  let img = 'https://media.licdn.com/dms/image/D4D03AQF2UlsLLvHaDg/profile-displayphoto-shrink_800_800/0/1692233934238?e=1698278400&v=beta&t=QoP_wd5MRO70WldTp8TKO2_TmBU824B9NN-10Zl5BUQ';

  let exp = 'https://stokimg.com/ib/mcq80PK0T1.png';

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={{
        color: '#3E67DA', 
        fontSize: 25, 
        margin: 15, 
        fontFamily: 'Verdana', 
        marginStart: 100}}>

        App Meu Perfil

      </Text>
      <Image
          source={{ uri: img }}
          style={{
          width: 200, 
          height: 200, 
          marginStart: 100}}
        />

      <Text style={{
        color: '#3E67DA', 
        fontSize: 25, 
        marginTop: 50, 
        marginLeft: 25, 
        margin: 5, 
        fontFamily: 'Verdana'}}> 

            Dados Pessoais:

        </Text>
      <Text style= {{
        fontSize:15, 
        marginLeft: 25}}>
        Erick Dias de Sousa, 28 anos 
      </Text>

      <Text style={{
        color: '#3E67DA', 
        fontSize: 25, 
        marginTop: 25, 
        marginLeft: 25, 
        margin: 5, 
        fontFamily: 'Verdana'}}> 

            Formação:

        </Text>
      <Text style= {{
        fontSize:15, 
        marginLeft: 25}}>

        Cursando Análise e Desenvolvimento de Sistemas

      </Text>

      <Text style={{
        color: '#3E67DA', 
        fontSize: 25, 
        marginTop: 25, 
        marginLeft: 25, 
        margin: 5, 
        fontFamily: 'Verdana'}}>

            Experiência:

        </Text>

      <Image
        source={{ uri: exp}}
        style={{ 
        width: 300, 
        height: 200, 
        marginStart: 25}}
        />

      <Text style={{
        color: '#3E67DA', 
        fontSize: 25, 
        marginTop: 25, 
        marginLeft: 25, 
        margin: 5, 
        fontFamily: 'Verdana'}}> 

    Projetos:

        </Text>
<TouchableOpacity onPress={() => Linking.openURL('https://github.com/erickbeavis?tab=repositories')} style={{ marginLeft: 25 }}>
        <Image
          source={{ 
            uri: 'https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Simbolo.png' }}

          style={{ 
            width: 200, 
            height: 40 }}

        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
