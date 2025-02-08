# Avaliação Prática - Analista de testes (QA)

## Descrição do Projeto 📰
Teste automatizado E2E para testar as funcionalidades do site https://seubarriga.wcaquino.me/, para entregar um ótimo site, com uma perfeita experiência 

## Requisitos 🪄
Windows 10 e superior (x64). <br>
Editor de código (VSCode utilizado no desenvolvimento). <br>
Node.js 18.x, 20.x, 22.x e superior. <br>

## Tecnologias utilizadas 🖥
Node.js 22x <br>
Cypress 14x

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

## BUGs, Falhas e Melhorias 

[Registro com o nome invalido]()
**Problema:** O Programa falhou, permitiu a criação de um novo cadastro com o campo nome contendo apenas caracteres especiais, e no segundo teste permitiu a criação de um novo cadastro com o campo nome contendo apenas números.

[Registro com o senha fraca]() 
**Problema:**O Programa falhou, permitiu a criação de um novo cadastro com uma senha fraca, contendo apenas 1 carater, ou seja não possui nenhuma verificação de senha.
