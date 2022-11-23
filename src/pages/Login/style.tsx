import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#735EBA',
  },
  cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  conteudo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    padding: 14,
    marginTop: 14,
  },
  rodape: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  botao: {
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.9,
    padding: 14,
    marginTop: 14,
    backgroundColor: '#190152',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
