# TDD com JavaScript e React JS

> Curso de TDD com JavaScript e React JS - Canal: `Jorge Aluizio`

```
https://youtube.com/playlist?list=PLE0DHiXlN_qqPy4HA3MOv-jI7ND2kKaqc
```

> ## Índice

- [Sobre](#sobre)
- [Projeto `exemple-tdd`](#exemple-tdd)
- [Projeto `devbook`](#devbook)
- [Dependências de desenvolvimento](#dependencias-dev)
- [Dependências de produção](#dependencias-prod)
- [Run App](#run-app)

> ## <a name="sobre"></a> Sobre

- Repositório que contém dois projetos utilizando a metodologia do `TDD`, o `exemple-tdd` e o `devbook`.

> ## <a name="devbook"></a> Projeto `devbook`

- O `devbook` é um projeto com React.Js onde os usuários podem listar livros, pesquisar por palavras chaves, ver os detalhes do livro, revisar a descrição, resenha e classificação do livro
- Aplicação do TDD ao longo de toda a construção do projeto
- Projeto criado a partir do `npx create-react-app`
- Uso do `cypress` como framework de testes end-to-end na aplicação
- Uso do Material-UI para criação das telas e componentes
- Criação de hooks personalizados

> ## <a name="exemple-tdd"></a> Projeto `exemple-tdd`

- O `exemple-tdd` é um projeto teste utilizando o Node.js com alguns exemplos em JavaScript de utilização do TDD
- Uso do babel para utilizar o ES6
- É utilizado o `Jest` como framework de testes unitários
- Nesse projeto se encontram diversos exemplos de uso dos métodos de testes do Jest
- Exemplo de métodos: 
  - toBe()
  - toEqual()
  - fn()
  - toMatch()
  - mock()
  - mockImplementation()
  - toHaveBeenCalled()
  - toHaveBeenCalledWith()
  - toBeGreaterThan()
  - toBeGreaterThanOrEqual()
  - toBeLessThan()
  - toBeLessThanOrEqual()
  - toBeDefined()
  - toBeUndefined()

> ## <a name="dependencias-dev"></a> Dependências de desenvolvimento

### Projeto `devbook`

- [cypress](https://www.npmjs.com/package/cypress) - Framework de testes end-to-end
- [json-server](https://www.npmjs.com/package/json-server) - Pacote para gerar uma "fake" api para consumo no front-end 

### Projeto `exemple-tdd`

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) - Pacote relacionado as configurações de ambiente do projeto com o Babel
- [babel-core](https://www.npmjs.com/package/babel-core) - Compilador do Babel
- [babel-jest](https://www.npmjs.com/package/babel-jest) - Plugin do Babel para rodar junto com o Jest
- [jest](https://www.npmjs.com/package/jest) - Framework de testes para JavaScript
- [regenerator-runtime]() - Compilador runtime para a utilização do ECMAScript 2015

> ## <a name="dependencias-prod"></a> Dependências de produção

### Projeto `devbook`

- [@material-ui/core](https://www.npmjs.com/package/@material-ui/core) - Pacote de componentes para React.Js para simplificar o desenvolvimento de aplicações web
- [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) - Pacote que disponibiliza o Material icons do Google para os componentes em React.Js
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) - Lib para testes do estado do DOM
- [axios](https://www.npmjs.com/package/axios) - Pacote para requisições no browser e no servidor node.js

> ## <a name="run-app"></a> Run App

### Clone

```
git clone https://github.com/will-cesar/tdd-javascript-react.git
```
### Projeto `devbook` 

#### Instalando as dependências

```
npm install
```

#### Execução da aplicação React.Js

```
npm start
```

#### Execução do backend (Fake API)

```
npm run dev:server
```

#### Execução da interface gráfica dos testes e2e

```
npm run cy:open
```

### Projeto `exemple-tdd`

#### Instalando as dependências

```
npm install
```

#### Execução dos testes unitários

```
npm test
```