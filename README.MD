<h1 align="center">🛸 Rick & Morty Explorer</h1>

<p align="center">
  Um catálogo interativo do multiverso de Rick and Morty, construído com React Native e Expo.
</p>

<p align="center">
  <img alt="Expo SDK" src="https://img.shields.io/badge/Expo-SDK%2056-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img alt="React Native" src="https://img.shields.io/badge/React%20Native-0.85-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>


---

## 📋 Sobre o Projeto

O **Rick & Morty Explorer** foi desenvolvido como projeto prático na **FATEC** para consolidar conceitos fundamentais de arquitetura mobile no ecossistema React Native. O app permite navegar pelo catálogo de personagens da série, visualizar seus detalhes e gerenciar uma lista de favoritos, tudo consumindo a [Rick and Morty API](https://rickandmortyapi.com/) de forma assíncrona.

PARTICIPANTES: José Lucas, Guilherme Pereira, Leonardo Araujo 

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 📜 **Listagem de Personagens** | Exibe todos os personagens da API em uma grade de cards com foto e nome. |
| 🔍 **Busca Dinâmica** | Campo de pesquisa com debounce de 500ms filtrando personagens por nome em tempo real. |
| 🧬 **Detalhes do Personagem** | Tela dedicada com status, espécie e gênero de cada personagem. |
| ⭐ **Sistema de Favoritos** | Favorita/desfavorita personagens com estado global gerenciado via Context API + `useReducer`. |
| ⏳ **Feedback Visual** | Indicadores de carregamento (`ActivityIndicator`) e mensagens para listas vazias. |

---

## 🛠️ Tecnologias

- **[Expo](https://expo.dev/) ~56.0** — Plataforma de desenvolvimento e build
- **[React Native](https://reactnative.dev/) 0.85** — Framework mobile
- **[React](https://react.dev/) 19** — Biblioteca de UI
- **[TypeScript](https://www.typescriptlang.org/) ~6.0** — Tipagem estática
- **[React Navigation v7](https://reactnavigation.org/)** — Navegação (Native Stack)
- **[Rick and Morty API](https://rickandmortyapi.com/)** — Fonte de dados (pública e gratuita)

---

## 🏗️ Arquitetura

```
src/
├── components/          # Componentes reutilizáveis
├── contexts/
│   └── FavoritesContext.tsx   # Estado global de favoritos (Context + useReducer)
├── routes/
│   └── index.tsx        # Definição das rotas (Stack Navigator)
├── screens/
│   ├── Home/            # Tela principal: listagem e busca de personagens
│   └── Details/         # Tela de detalhes e botão de favoritar
└── services/
    └── api.ts           # Camada de comunicação com a Rick and Morty API
```

**Decisões de design:**
- **Context API + `useReducer`** para estado global de favoritos, evitando prop drilling e garantindo previsibilidade nas mutações de estado.
- **Debounce** na busca para reduzir chamadas desnecessárias à API enquanto o usuário digita.
- **Stack Navigator** para transição natural entre a listagem e a tela de detalhes.

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Expo Go](https://expo.dev/go) instalado no celular **ou** um emulador Android/iOS configurado

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/JoseMGomes/rick-morty-explorer.git

# 2. Acesse a pasta do projeto
cd rick-morty-explorer

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npx expo start
```

Com o servidor rodando, escolha como abrir o app:

| Comando | Ação |
|---|---|
| `a` | Abre no emulador Android |
| `i` | Abre no simulador iOS |
| `w` | Abre no navegador (web) |
| QR Code | Escaneia com o **Expo Go** no celular |

---

## 🌐 API

Este projeto consome a **[The Rick and Morty API](https://rickandmortyapi.com/)**, uma REST API pública com dados de todos os personagens, episódios e localizações da série.

- **Endpoint de listagem:** `GET /api/character?name={query}`
- **Endpoint de detalhes:** `GET /api/character/{id}`
- **Documentação completa:** https://rickandmortyapi.com/documentation/

---

## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.