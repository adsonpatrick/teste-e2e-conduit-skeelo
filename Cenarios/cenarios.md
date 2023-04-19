# Cenários de Teste

### Aqui estão os cenários que foram mapeados e escritos em Gherkin.

## Login

**Cenário:** Validação de login com email e senha corretos
<br>**Dado** Que eu acesse a plataforma
<br>**Quando** Eu digito o email e a senha
<br>**E** Clico no botão Sign in
<br>**Então** Sou logado a plataforma

**Cenário:** Espera que não consiga logar com senha incorreta
<br>**Dado** Que eu acesse a plataforma
<br>**Quando** Eu digito o email e a senha incorreta
<br>**E** Clico no botão Sign in
<br>**Então** Irá retornar uma mensagem de login e senha invalidas

**Cenário:** Espera que não consiga logar com email incorreto
<br>**Dado** Que eu acesse a plataforma
<br>**Quando** Eu digito um email incorreto com uma senha correta
<br>**E** Clico no botão Sign in
<br>**Então** Irá retornar uma mensagem de login e senha invalidas

## Logout
**Cenário:** Validação de logout da plataforma
<br>**Dado** Que eu acesse a plataforma
<br>**Quando** Eu clico nas configurações
<br>**E** Clico no botão de logout
<br>**Então** Deverá sair da plataforma

## New Article (Novo artigo)
**Cenário:** Espera que realize a publicação de um artigo
<br>**Dado** Que eu acesse a plataforma
<br>**Quando** Eu clico no botão de nova postagem
<br>**E** Preencho o título e subtitulo
<br>**E** Escrevo o artigo e clico em publicar
<br>**Então** O artigo deve ser publicado

**Cenário:** Espera que não publique um artigo com o título em branco
<br>**Dado** Que eu acesse a plataforma
<br>**Quando** Eu clico no botão de nova postagem
<br>**E** Preencho o subtitulo
<br>**E** Escrevo o artigo e clico em publicar
<br>**Então** Deve aparecer uma mensagem de erro informando que o título não pode ficar em branco

## Sign Up (Cadastro de usuário)
**Cenário:** Espera que crie uma nova conta na plataforma
<br>**Dado** Que eu queira criar uma nova conta
<br>**Quando** Preencho username, email e senha
<br>**E** Clico no botão de criar conta
<br>**Então** A conta é criada com sucesso

**Cenário:** Espera que não crie uma nova conta com um username já utilizado
<br>**Dado** Que eu queira criar uma nova conta
<br>**Quando** Preencho username já existente
<br>**E** Clico no botão de criar conta
<br>**Então** Retorna uma mensagem de erro informando que username já existe

## My Articles (Meus artigos)
**Cenário:** Espera que consiga inserir um comentário em um artigo
<br>**Dado** Que eu queira criar uma nova conta
<br>**Quando** Clico no perfi
<br>**E** Acesso algum artigo e escrevo um comentário
<br>**E** Clico no botão de submeter
<br>**Então** Então o comentário é postado no artigo








