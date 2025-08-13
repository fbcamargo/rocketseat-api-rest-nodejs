# 🚀 API REST com Node.js

> API REST robusta e escalável desenvolvida com Node.js, Fastify, TypeScript e Knex

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-5.4+-yellow.svg)](https://fastify.io/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Concluído-brightgreen.svg)]()

## 📋 Descrição

Esta é uma API REST completa para gerenciamento de transações financeiras, desenvolvida como parte do curso da Rocketseat. A aplicação demonstra as melhores práticas de desenvolvimento backend com Node.js, incluindo validação de dados, autenticação por sessão, testes automatizados e migrações de banco de dados.

### 🎯 Problema Resolvido

A API resolve a necessidade de um sistema para gerenciar transações financeiras com:

- Controle de sessão por cookies
- Validação de dados com Zod
- Suporte a múltiplos bancos de dados (SQLite e PostgreSQL)
- API RESTful com endpoints bem definidos
- Testes automatizados para garantir qualidade

## 📚 Tabela de Conteúdos

- [Features](#-features)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Endpoints](#-api-endpoints)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Testes](#-testes)
- [Licença](#-licença)

## ✨ Features

- 🔐 **Autenticação por Sessão**: Controle de acesso baseado em cookies
- 💰 **Gestão de Transações**: CRUD completo para transações financeiras
- 📊 **Resumo Financeiro**: Cálculo automático de saldo e resumos
- 🗄️ **Multi-banco**: Suporte a SQLite (desenvolvimento) e PostgreSQL (produção)
- ✅ **Validação de Dados**: Schema validation com Zod
- 🧪 **Testes Automatizados**: Suite de testes com Vitest e Supertest
- 🚀 **Performance**: Framework Fastify para alta performance
- 📝 **TypeScript**: Código tipado e robusto
- 🔄 **Migrações**: Controle de versão do banco com Knex

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação tipada
- **Fastify** - Framework web de alta performance
- **Knex.js** - Query builder e migrações
- **Zod** - Validação de schemas

### Banco de Dados

- **SQLite** - Banco de dados para desenvolvimento
- **PostgreSQL** - Banco de dados para produção
- **Knex Migrations** - Controle de versão do banco

### Desenvolvimento

- **ESLint** - Linting de código
- **Vitest** - Framework de testes
- **Supertest** - Testes de API
- **tsx** - Executor TypeScript
- **tsup** - Bundler para produção

## 📁 Estrutura do Projeto

```
src/
├── @types/          # Definições de tipos TypeScript
├── app.ts           # Configuração principal da aplicação
├── database.ts      # Configuração do banco de dados
├── env/             # Gerenciamento de variáveis de ambiente
├── middlewares/     # Middlewares personalizados
├── routes/          # Definição das rotas da API
└── server.ts        # Servidor HTTP

db/
├── migrations/      # Migrações do banco de dados

test/
└── transactions.spec.ts  # Testes da API
```

## 🔌 API Endpoints

### Transações

#### `POST /transactions`

Cria uma nova transação.

**Body:**

```json
{
  "title": "Salário",
  "amount": 5000,
  "type": "credit"
}
```

**Response:** `201 Created`

#### `GET /transactions`

Lista todas as transações da sessão.

**Headers:** `Cookie: sessionId=<uuid>`

**Response:**

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "amount": 5000,
      "session_id": "uuid",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### `GET /transactions/:id`

Obtém uma transação específica.

**Headers:** `Cookie: sessionId=<uuid>`

**Response:** `200 OK` com dados da transação

#### `GET /transactions/summary`

Obtém o resumo financeiro da sessão.

**Headers:** `Cookie: sessionId=<uuid>`

**Response:**

```json
{
  "summary": {
    "amount": 5000
  }
}
```

## 📋 Pré-requisitos

- **Node.js** 18.0.0 ou superior
- **npm** ou **yarn** para gerenciamento de pacotes
- **Git** para controle de versão

### Para Produção

- **PostgreSQL** (opcional, para substituir SQLite)

## 🚀 Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/fbcamargo/rocketseat-api-rest-nodejs
   cd rocketseat-api-rest-nodejs
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   ```bash
   cp .env.example .env
   ```

4. **Configure o arquivo .env**
   ```env
   NODE_ENV=development
   DATABASE_CLIENT=sqlite
   DATABASE_URL=./db/database.sqlite
   PORT=3333
   ```

## ⚙️ Configuração

### Variáveis de Ambiente

| Variável          | Descrição            | Padrão       | Exemplo                |
| ----------------- | -------------------- | ------------ | ---------------------- |
| `NODE_ENV`        | Ambiente de execução | `production` | `development`          |
| `DATABASE_CLIENT` | Cliente do banco     | -            | `sqlite` ou `pg`       |
| `DATABASE_URL`    | URL de conexão       | -            | `./db/database.sqlite` |
| `PORT`            | Porta do servidor    | `3333`       | `3000`                 |

### Configuração do Banco

1. **SQLite (Desenvolvimento)**

   ```bash
   npm run knex migrate:latest
   ```

2. **PostgreSQL (Produção)**
   ```bash
   # Instale o PostgreSQL e crie um banco
   # Configure DATABASE_URL no .env
   npm run knex migrate:latest
   ```

## 🎯 Uso

### Desenvolvimento

```bash
npm run dev
```

### Build para Produção

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Testes

```bash
npm test
```

## 🧪 Testes

O projeto inclui uma suite completa de testes automatizados:

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com coverage
npm run test:coverage
```

### Estrutura dos Testes

- **Testes de API**: Validação de endpoints e respostas
- **Testes de Banco**: Verificação de operações CRUD
- **Testes de Validação**: Schema validation com Zod
- **Testes de Sessão**: Controle de autenticação

## 📄 Licença

Este projeto está licenciado sob a licença **ISC** - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

**Desenvolvido com 💜 durante o curso da [Rocketseat](https://app.rocketseat.com.br/journey/node-js-2023)**
