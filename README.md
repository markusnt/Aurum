## Desafio Aurum

### Sobre o projeto

Este projeto visa o desenvolvimento de uma aplicação de teste prático para avaliação de skill na tencnologia React Native

#### Feito com
Abaixo segue o que foi utilizado na criação deste projeto:
- TypeScript
- React Native
- Redux
  - Redux Saga
- React Navigation
- React Native Gesture Handler
- Styled Components
- Yup
- Date-fns
- Axios
- React Native Vector Icons
- Unform
- ESlint
  - eslint-config-airbnb
  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
  - eslint-plugin-react
  - eslint-plugin-react-native
  - eslint-import-resolver-babel-plugin-root-import
- Prettier
  - eslint-plugin-prettier
  - eslint-config-prettier
- EditorConfig

### Estrutura de Arquivos
A estrutura de arquivos está da seguinte maneira:

```
├── src/
│   ├── components/
│   ├── pages/
│   │   └── Main/
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── routes/
│   │   ├── app.routes.tsx
│   │   ├── auth.routes.tsx
│   │   └── index.tsx
│   ├── services/
│   │   └── api.ts
│   ├── store/
│   │   ├── modules/
│   │   │   |   └── auth/
|   |   |   |   |   ├── actions.ts
|   |   |   |   |   ├── reducer.ts
|   |   |   |   |   └── sagas.ts
│   │   │   ├── rootReducer.ts
│   │   │   └── rootSaga.ts
│   │   ├── index.ts
│   │   └── persistReducers.ts
│   ├── utils/
│   │   ├── appUtils.tsx
│   └── App.tsx
└── index.js
```

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:
```sh
yarn
```
1.1 Caso esteja rodando no iOS, usar tambem os comandos:
```sh
cd ios && pod install && cd..
```

2. Após a instalação:
```sh
yarn android // caso esteja no Android
yarn ios // caso esteja no iOS
```
