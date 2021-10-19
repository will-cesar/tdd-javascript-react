# TDD com JavaScript e React JS

> Curso de TDD com JavaScript e React JS - Canal: `Jorge Aluizio`

```
https://youtube.com/playlist?list=PLE0DHiXlN_qqPy4HA3MOv-jI7ND2kKaqc
```

> ## Índice

- [Sobre](#sobre)
- [Projeto "exemple-tdd"](#exemple-tdd)
- [Projeto "devbook"](#devbook)
- [Dependências de desenvolvimento](#dependencias-dev)
- [Run App](#run-app)

> ## <a name="sobre"></a> Sobre

- Repositório que contém dois projetos utilizando a metodologia do `TDD`, o `exemple-tdd` e o `devbook`.

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

> ## <a name="devbook"></a> Projeto `devbook`

- O `devbook` é um projeto com React.Js onde os usuários podem listar livros, pesquisar por palavras chaves, ver os detalhes do livro, revisar a descrição, resenha e classificação do livro
- Aplicação do TDD ao longo de toda a construção do projeto
- Projeto criado a partir do `npx create-react-app`
- Uso do `cypress` como framework de testes end-to-end na aplicação
- Uso do Material-UI para criação das telas e componentes

> ## <a name="dependencias-dev"></a> Dependências de desenvolvimento

### Projeto `exemple-tdd`

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) - Pacote relacionado as configurações de ambiente do projeto com o Babel
- [babel-core](https://www.npmjs.com/package/babel-core) - Compilador do Babel
- [babel-jest](https://www.npmjs.com/package/babel-jest) - Plugin do Babel para rodar junto com o Jest
- [jest](https://www.npmjs.com/package/jest) - Framework de testes para JavaScript
- [regenerator-runtime]() - Compilador runtime para a utilização do ECMAScript 2015

### Projeto `devbook`

- [cypress](https://www.npmjs.com/package/cypress) - Framework de testes end-to-end
- [json-server](https://www.npmjs.com/package/json-server) - Pacote para gerar uma "fake" api para consumo no front-end 

> ## <a name="run-app"></a> Run App
- DevBook
  - npm start -> roda a aplicação React
  - npm run dev:server -> roda a fake API na porta 9000
  - npm run cy:open -> roda os teste com a interface gráfica