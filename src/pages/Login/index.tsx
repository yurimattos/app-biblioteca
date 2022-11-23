import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';

import AxiosInstance from '../../api/AxiosInstance';
import {styles} from './style';

import {DataContext} from '../../context/DataContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const {armazenaDadosUsuario} = useContext(DataContext);

  const handleLogin = async () => {
    console.log(`Email: ${email} - Senha: ${senha}`);
    var tokenJwt: any = null;

    setLoading(true);

    try {
      const retorno = await AxiosInstance.post('/auth/login', {
        email: email,
        password: senha,
      });

      if (retorno.status === 200) {
        console.log(`Retorno: ${JSON.stringify(retorno.data)}`);

        tokenJwt = retorno.data;

        //Passando pro método do contexto o token jwt
        //Acessando propriedade com hifen usando []
        armazenaDadosUsuario(tokenJwt['jwt-token']);

        setTimeout(() => {
          navigation.navigate('Home');
          setLoading(false);
        }, 1800);
      } else {
      }
    } catch (error) {
      setLoading(false);

      console.log('Erro ao realizar a autenticação');
      console.log(`Erro: ${JSON.stringify(error)}`);

      Alert.alert(
        'Ocorreu um erro na autenticação',
        'Verifique os dados informados',
        [{text: 'OK', onPress: () => console.log('OK')}],
        {cancelable: true},
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Bem-vindo</Text>
        </View>

        <View style={styles.conteudo}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={setSenha}
            value={senha}
          />
        </View>

        <View style={styles.rodape}>
          <TouchableOpacity style={styles.botao} onPress={() => handleLogin()}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.textoBotao}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
