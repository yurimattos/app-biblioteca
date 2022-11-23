import React, {createContext, useState} from 'react';
import jwt_decode from 'jwt-decode';

import {DadosUsuarioType} from '../models/DadosUsuarioType';

export const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [dadosUsuario, setDadosUsuario] = useState<DadosUsuarioType>();

  const armazenaDadosUsuario = (jwt: any) => {
    var tokenDecodificado: any = jwt_decode(jwt);

    var usuario = tokenDecodificado.usuario;
    usuario = JSON.parse(usuario);

    setDadosUsuario({
      id: usuario?.userId,
      nome: usuario?.usuarioNome,
      email: usuario?.userEmail,
      token: jwt,
    });
  };

  return (
    <DataContext.Provider value={{dadosUsuario, armazenaDadosUsuario}}>
      {children}
    </DataContext.Provider>
  );
};
