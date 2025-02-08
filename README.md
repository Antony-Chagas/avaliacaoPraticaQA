# Avaliação Prática - Analista de testes (QA)

## Descrição do Projeto 📰
Teste automatizado E2E para testar as funcionalidades do site https://seubarriga.wcaquino.me/, para entregar um ótimo site, com uma perfeita experiência 

## Requisitos 🪄
* Windows 10 e superior (x64). <br>
* Editor de código (VSCode utilizado no desenvolvimento). <br>
Node.js 18.x, 20.x, 22.x e superior. <br>

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

### Teste que devem retornar sucesso 

**Teste na tela de login** <br>
* Caso 1
* Caso 2
**Teste na tela de cadastro** <br>
* Caso 1
* Caso 2
**Teste na tela de movimentação** <br>
* Caso 1
* Caso 2
**Teste na tela de cadastro de conta/despesa** <br>
* Caso 1
* Caso 2

### Teste que deve retornar erro
**Teste na tela de login** <br>
* Caso 1
* Caso 2
**Teste na tela de cadastro** <br>
* Caso 1
* Caso 2
**Teste na tela de movimentação** <br>
* Caso 1
* Caso 2
**Teste na tela de cadastro de conta/despesa** <br>
* Caso 1
* Caso 2

## BUGs, Falhas e Melhorias 

[Registro com o nome invalido]()
**Problema:** O Programa falhou, permitiu a criação de um novo cadastro com o campo nome contendo apenas caracteres especiais, e no segundo teste permitiu a criação de um novo cadastro com o campo nome contendo apenas números.

[Registro com o senha fraca]() 
**Problema:** O Programa falhou, permitiu a criação de um novo cadastro com uma senha fraca, contendo apenas 1 caráter, ou seja, não possui nenhuma verificação de senha.

[Campo descrição no fomulário de movimentação]()
**Problema:** O programa falhou, permitiu o cadastro de uma movimentação com caracteres especiais indevidos no campo descrição, podendo comprometer a segurança da aplicação.
**Importante** O mesmo se aplica a o campo nome e os outros campo de texto da aplicação.
**Problema:** O programa falhou, permitiu o cadastro de uma movimentação com o campo Interessado com menos de 3 caracteres. 

[Campo valor no fomulário de movimentação]()
**Problema:** O programa falhou, permitiu o cadastro de um valor negativo no campo valor.
**Problema:** O programa falhou, permitiu o cadastro do valor 0 no campo valor. 
**Problema:** O programa falhou, o mesmo não formata os números colocados pelo usuário para o real, mesmo o usuário colocando o número correto, retorna erro.

[Campo Situação no fomulário de movimentação]()
**Problema:** O programa falhou, permitiu criar uma conta com status de paga, mas colocando a data que foi paga em um tempo futuro.