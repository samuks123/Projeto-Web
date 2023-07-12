# Projeto-Web
Repositório referente a disciplina de Introdução ao Desenvolvimento Web

Grupo 24

Jonathan Sanchez Minaya - 11333691

Samuel Victorio Bernacci - 12703455

https://www.figma.com/proto/GhSJJa7h49rRrtxJsQ8hPq/Casa-dos-sonhos?type=design&node-id=1-22&scaling=min-zoom&page-id=0%3A1

![image](https://github.com/samuks123/Projeto-Web/assets/103591276/17cc52bf-f3f1-4633-8c4a-b18b3060d46f)

# Requirements: 
Os requisitos estão descritos no documento do projeto, https://docs.google.com/document/d/1b1oPy4Uh08-5XWs-xyDDFzLZMHG3W7A2/edit#heading=h.gjdgxs.

# Project Description: 
Nosso projeto se trata de um site de venda de imóveis.
O usuário deve se cadastrar ou realizar login para poder ver a listas de propriedades, ao clicar no imóvel desejado é exibida uma página que contém a descrição da propriedade, com todas as informações pertinentes, incluindo o agente imobiliário responsável e o botão do carrinho.

# Comments About the Code: 
O front-end do projeto é feito utilizando as frameworks React, e Tailwind CSS, a segunda foi utilizada para facilitar o desenvolvimento em algumas etapas.
O back-end foi feito em node.js e utilizando o nodemon.

# Test Plan: 
## Credenciais de administrador: Login: admin; Senha: admin
1: O usúario se cadastra ou realiza o login, seleciona uma casa de sua escolha e a adiciona ao carrinho e finaliza sua compra. \
2: O administrador realiza o login, seleciona uma casa de sua escolha e altera seu preço. \
3: O administrador realiza o login, seleciona uma casa de sua escolha e a deleta. \
4: O administrador realiza o login, seleciona a opção de adicionar uma nova casa, insere todas as informações e confirma. \
5: O usúario se cadastra ou realiza o login, abre a sua página de usuário e deseja mudar seu email. 

# Test Results: 
1: A funcionalidade de carrinho não foi implementada. \
2: Tudo acontece de acordo e o preço é atualizado na base de dados e a tela é atualizada para aplicar a mudança. \
3: Tudo acontece de acordo e a casa é apagada da base de dados e a tela é atualizada para aplicar a mudança. \
4: Tudo acontece de acordo e a cada é inserida na base de dados e a tela é atualizada para aplicar a mudança. \
5: A funcionalidade de edição de cadastro não foi implementada.

# Build Procedures: 
É necessário o Node.js e é recomendado o npm. São necessários dois terminais, um para rodar o front-end e outro para o back-end. \
no primeiro terminal navege para a parte frontend e execute: \
`npm install` \
`npm start` \
no segundo terminal navege para a pasta backend e execute: \
`npm install` \
`npm install -g nodemon` \
`nodemon server.js`

# Problems: 
A integração com o banco de dados se mostrou bem desafiadora resultando em problemas em partes do projetos que já exibiam funcionamento em etapas anteriores.

# Comments: 
Sem comentários.
