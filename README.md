# Teste E2E na plataforma Conduit - Com Cypress

👋 Seja bem-vindo(a)!

***

# Pré-requisitos 

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) (estou usando a versão `2.38.1` enquanto escrevo esta aula)
- [Node.js](https://nodejs.org/en/) (estou usando a versão `v16.14.6` enquanto escrevo esta aula)
- npm (estou usando a versão `9.6.4` enquanto escrevo esta aula)

> **Obs.:** Recomendo utilizar as mesmas versões, ou versões mais recentes dos sistemas listados acima.
>
> **Obs. 2:** Ao instalar o Node.js o npm é instalado junto. 🎉
>
> **Obs. 3:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` no seu terminal de linha de comando.
>
> **Obs. 4:** Deixei links para os instaladores na lista de requisitos acima, caso não os tenha instalados ainda.

___

Legal, os pre-requisitos estão prontos. ☑️

# Conhecendo a plataforma que será testada

Antes de começar a rodas os testes acho legal passar um contexto referente a plataforma [Conduit](https://react-redux.realworld.io/#/?_k=zmbp9d) é uma plataforma voltada para testes que tem como finalidade ser um hub de artigos, no qual qualquer um pode se inscrever e publicar algum artigo.

Escrevi alguns cenários de testes abrangendo algumas das principais funcionalidades como *cadastro de usuário, login, logout e escrever novos artigos*. Como foi pedido nas instruções do desafio eu disponibilizei os cenários escrito em Gherkin na pasta **Cenários** na raiz do projeto que você também pode acessar clicando **[AQUI](https://github.com/adsonpatrick/teste-e2e-conduit-skeelo/blob/main/Cenarios/cenarios.md).** Também utilizei o cypress-plugin-steps para adicionar as etapas do cenários *(Gherkin - Dado, Quando e Então)* diretamente no código, para saber mais sobre o plugin pode clicar **[AQUI](https://github.com/filiphric/cypress-plugin-steps).** 

___

# Fork e clone o projeto 🐑

1. Abra o navegador
2. Acesse a URL https://github.com/adsonpatrick/teste-e2e-conduit-skeelo
3. Faça um [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) do projeto.
4. No seu fork do projeto, clique no botão **Code**, escolha uma opção de clone (HTTPS ou SSH) e copie o link de clone do projeto
5. Em seu terminal de linha de comando (em uma pasta onde você armazene seus projetos de software), execute o comando `git clone [cole-o-link-copiado-aqui]`.
6. Após o clone do projeto, acesse o diretório recém clonado.

# Rodando o teste via pipeline - Github Actions 

## Ao entrar no repositório clique na aba **[Actions](https://raw.githubusercontent.com/adsonpatrick/teste-e2e-conduit-skeelo/main/images/Image001.png?token=GHSAT0AAAAAACBSGAFFBKXXQCRW7PCS2OJ2ZB7AI5Q)




