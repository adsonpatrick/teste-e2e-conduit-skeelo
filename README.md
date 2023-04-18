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

Escrevi alguns cenários de testes abrangendo algumas das principais funcionalidades como *cadastro de usuário, login, logout e escrever novos artigos*.


