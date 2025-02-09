# Avaliação Prática - Analista de testes (QA)

## Índice 
* [Descrição do Projeto](https://github.com/Antony-Chagas/avaliacaoPraticaQA/tree/main?tab=readme-ov-file#descri%C3%A7%C3%A3o-do-projeto-)
* [Requisitos](https://github.com/Antony-Chagas/avaliacaoPraticaQA/tree/main?tab=readme-ov-file#requisitos-)
* [Tecnologias utilizadas](https://github.com/Antony-Chagas/avaliacaoPraticaQA/tree/main?tab=readme-ov-file#tecnologias-utilizadas-)
* [Como rodar o projeto baixado](https://github.com/Antony-Chagas/avaliacaoPraticaQA/tree/main?tab=readme-ov-file#como-rodar-o-projeto-baixado-)
* [Testes realizados](https://github.com/Antony-Chagas/avaliacaoPraticaQA/tree/main?tab=readme-ov-file#testes-realizados-)
* [Testes que devem retornar sucesso](https://github.com/Antony-Chagas/avaliacaoPraticaQA/tree/main?tab=readme-ov-file#testes-que-devem-retornar-sucesso)
* [Teste que devem retornar erro](https://github.com/Antony-Chagas/avaliacaoPraticaQA/tree/main?tab=readme-ov-file#testes-que-devem-retornar-erro)
* [BUGs, Falhas e Melhorias](https://github.com/Antony-Chagas/avaliacaoPraticaQA/tree/main?tab=readme-ov-file#bugs-falhas-e-melhorias)

## Descrição do Projeto 📰
Teste automatizado E2E para testar as funcionalidades do site https://seubarriga.wcaquino.me/, para entregar um ótimo site, com uma perfeita experiência para os clientes.

## Requisitos 🪄
* Windows 10 e superior (x64). <br>
* Editor de código (VSCode utilizado no desenvolvimento). <br>
* Node.js 18.x, 20.x, 22.x e superior. <br>

## Tecnologias utilizadas 🖥
* Node.js 22x <br>
* Cypress 14x

## Como rodar o projeto baixado 🎡
Iniciar o projeto JavaScript
```
npm init
```
Instalar Cypress
```
npm install cypress --save-dev
```
Iniciar o Cypress
```
npx Cypress open
```

## Testes realizados 🔬

## Testes que devem retornar sucesso.

**Testes na tela de login:** 
* Caso 1: [Realizar um login com sucesso](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_success/login_screen/login_case1.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_14.png)
* Caso 2: [Realizar um logout com sucesso](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_success/login_screen/logout_case1.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_15.png)
<br>

**Testes na tela de cadastro:** 
* Caso 1: [Cadastrar um novo usuário com sucesso](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_success/registration_screen/register_case1.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_16.png)
<br>

**Testes na tela de movimentação:** 
* Caso 1: [Cadastrar uma movimentação com sucesso e apresentar as movimentações](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_success/screen_of_movement/extract_case1.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_17.png)
<br>

**Testes na tela de cadastro de conta/despesa:** 
* Caso 1: [Cadastrar uma nova conta/despesa](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_success/expense_creation_screen/create_expense_case1.cy.js)<br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_13.png)

## Testes que devem retornar erro.
**Testes na tela de login:** 
* Caso 1: [Login com os dados inválidos](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/login_screen/login_case1.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_2.png)
* Caso 2: [Login com os dados vazio](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/login_screen/login_case2.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_3.png)
<br>

**Testes na tela de cadastro:** 
* Caso 1: [Novo cadastro com dados existentes](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/registration_screen/register_case1.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_4.png)
* Caso 2: [Novo cadastro com campo vazio](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/registration_screen/register_case2.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_5.png)
* Caso 3: [Testes com campo nome inválidos](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/registration_screen/register_case3.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_6.png) <br>
🔳[imagem 2 do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_6.1.png)
* Caso 4: [Testes com a senha muito fraca](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/registration_screen/register_case4.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_7.png)
<br>

**Testes na tela de movimentação:** 
* Caso 1: [Teste campo *Data da Movimentação*, Deve aceitar apenas datas válidas e no formato formato DD/MM/AAAA e a Data da Movimentação deve ser menor ou igual à data atual](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/screen_of_movement/movement_case1.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_8.png) <br>
🔳[imagem 2 do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_8.1.png)
* Caso 2: [Teste campo *Data do Pagamento*, Deve aceitar apenas datas válidas e no formato formato DD/MM/AAAA](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/screen_of_movement/movement_case2.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_9.png)
* Caso 3: [Teste campo *Campo Descrição*, Deve impedir a inserção de caracteres especiais indevidos (<>/*{} etc.](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/screen_of_movement/movement_case3.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_10.png)
* Caso 4: [Teste campo *Campo Interessado*, Deve impedir a inserção de caracteres especiais indevidos (<>/*{} etc.) e Deve aceitar nomes com pelo menos 3 caracteres.](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/screen_of_movement/movement_case4.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_11.png) <br>
🔳[imagem 2 do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_11.1.png)
* Caso 5: [Teste campo *Campo valor*, Deve aceitar apenas valores numéricos positivos e Deve formatar corretamente no padrão monetário (R$ 0.000,00)](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/screen_of_movement/movement_case5.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_12.png) <br>
🔳[imagem 2 do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_12.1.png) <br>
🔳[imagem 3 do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_12.2.png)
* Caso 6: [Teste campo *Situação*, Para conta com situação paga, Deve impedir a criação com uma data do pagamento futuro](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/screen_of_movement/movement_case6.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_18.png)
<br>

**Testes na tela de cadastro de conta/despesa:** 
* Caso 1: [Cadastrar uma nova conta com um nome já existente](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/expense_creation_screen/create_expense_case1.cy.js) <br>
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_1.png)

## BUGs, Falhas e Melhorias 

[Registro com o nome invalido](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/registration_screen/register_case3.cy.js) 
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_6.png)
🔳[imagem 2 do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_6.1.png)
**Problema:** O Programa falhou, permitiu a criação de um novo cadastro com o campo **nome** contendo apenas caracteres especiais, e no segundo teste permitiu a criação de um novo cadastro com o campo nome contendo menos de 3 caracteres. 

[Registro com o senha fraca](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/registration_screen/register_case4.cy.js) 
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_7.png)
**Problema:** O Programa falhou, permitiu a criação de um novo cadastro com uma **senha** fraca, contendo apenas 1 caráter, ou seja, não possui nenhuma verificação de senha.

[Campo descrição no fomulário de movimentação](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/screen_of_movement/movement_case3.cy.js) 
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_11.png)
🔳[imagem 2 do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_11.1.png)
**Problema:** O programa falhou, permitiu o cadastro de uma movimentação com caracteres especiais indevidos no campo **descrição**, podendo comprometer a segurança da aplicação.<br>
**Importante:** O mesmo se aplica a o campo **nome** e os outros campo de **texto** da aplicação.<br>
**Problema:** O programa falhou, permitiu o cadastro de uma movimentação com o campo **Interessado** com menos de 3 caracteres. <br>

[Campo valor no fomulário de movimentação](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/screen_of_movement/movement_case5.cy.js) 
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_12.png) 
🔳[imagem 2 do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_12.1.png) 
🔳[imagem 3 do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_12.2.png)
**Problema:** O programa falhou, permitiu o cadastro de um **valor negativo** no campo valor.<br>
**Problema:** O programa falhou, permitiu o cadastro do **valor 0** no campo valor. <br>
**Problema:** O programa falhou, o mesmo não formata os números colocados pelo usuário para o **formato real(R$)**, mesmo o usuário colocando o número correto, retorna erro.<br>

[Campo Situação no fomulário de movimentação](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/test_returns_error/screen_of_movement/movement_case6.cy.js) 
🔳[imagem do teste](https://github.com/Antony-Chagas/avaliacaoPraticaQA/blob/main/cypress/e2e/img/Screenshot_18.png)
**Problema:** O programa falhou, permitiu criar uma conta com **status de paga**, mas colocando a data que foi paga em um **tempo futuro**.