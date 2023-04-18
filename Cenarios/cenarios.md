# Cenários de Teste

### Aqui estão os cenários que foram mapeados e escritos em Gherkin.

## Login

**Cenário:** Validação de login com email e senha corretos
**Dado** Que eu acesse a plataforma
**Quando** Eu digito o email e a senha
**E** Clico no botão Sign in
**Então** Sou logado a plataforma

**Cenário:** Espera que não consiga logar com senha incorreta
**Dado** Que eu acesse a plataforma
**Quando** Eu digito o email e a senha incorreta
**E** Clico no botão Sign in
**Então** Irá retornar uma mensagem de login e senha invalidas

**Cenário:** Espera que não consiga logar com email incorreto
**Dado** Que eu acesse a plataforma
**Quando** Eu digito um email incorreto com uma senha correta
**E** Clico no botão Sign in
**Então** Irá retornar uma mensagem de login e senha invalidas

## Logout
**Cenário:** Validação de logout da plataforma
**Dado** Que eu acesse a plataforma
**Quando** Eu clico nas configurações
**E** Clico no botão de logout
**Então** Deverá sair da plataforma

## New Article (Novo artigo)
**Cenário:** Espera que realize a publicação de um artigo
**Dado** Que eu acesse a plataforma
**Quando** Eu clico no botão de nova postagem
**E** Preencho o título e subtitulo
**E** Escrevo o artigo e clico em publicar
**Então** O artigo deve ser publicado

**Cenário:** Espera que não publique um artigo com o título em branco
**Dado** Que eu acesse a plataforma
**Quando** Eu clico no botão de nova postagem
**E** Preencho o subtitulo
**E** Escrevo o artigo e clico em publicar
**Então** Deve aparecer uma mensagem de erro informando que o título não pode ficar em branco

## Sign Up (Cadastro de usuário)
**Cenário:** Espera que crie uma nova conta na plataforma
**Dado** Que eu queira criar uma nova conta
**Quando** Preencho username, email e senha
**E** Clico no botão de criar conta
**Então** A conta é criada com sucesso

**Cenário:** Espera que não crie uma nova conta com um username já utilizado
**Dado** Que eu queira criar uma nova conta
**Quando** Preencho username já existente
**E** Clico no botão de criar conta
**Então** Retorna uma mensagem de erro informando que username já existe








