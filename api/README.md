<p align="center">
  <a href="https://nodejs.org/pt" target="blank"><img src="https://nodejs.org/static/logos/jsIconGreen.svg" width="200" alt="Node.js Logo" /></a>
</p>

<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/Node.js-339933.svg?style=flat&logo=Node.js&logoColor=white" alt="Node.Js">
    <img src="https://img.shields.io/badge/Fastify-000000.svg?style=flat&logo=Fastify&logoColor=white" alt="Fastify">
    <img src="https://img.shields.io/badge/Nodemailer-0A84FF.svg?style=flat&logo=Nodemailer&logoColor=white" alt="Nodemailer">
	<br>
  <img src="https://img.shields.io/badge/SQLite-003B57.svg?tyle=flat&logo=SQLite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
  <img src="https://img.shields.io/badge/Zod-3F7BEE.svg?style=flat&logo=Zod&logoColor=white" alt="Zod">
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>

- [📍 Overview](#-overview)
- [🧩 Features](#-features)
- [🗂️ Repository Structure](#-repository-structure)
- [🚀 Getting Started](#-getting-started)
  - [⚙️ Installation](#️-installation)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)
</details>
<hr>

## 📍 Overview

[EN]

This API aims to serve data to a Front-end application (Web or Mobile) that aims to be a travel planner, allowing the user to create a trip, share it with friends via links and schedule activities to be done during the trip. rest time....guests can accept or not the trip invitation through the emails sent and finally, the trip Host can edit information such as changing the destination, start and end date, activities and guests (Add or remove).

[PT-BR]

Esta API tem como objetivo servir os dados para uma aplicação Front-end (Web ou Mobile) que tem como objetivo ser um planejador de viagens, sendo possivel o usuário criar uma viagem, compartilhar com amigos via links e programar atividades a serem feitas durante o tempo de repouso.... os convidados podem aceitar ou não o convite da viagem atraveis dos e-mails encaminhado e por fim, o Host da viagem pode editar informações como alterar o distino, data de inicio e fim, atividades e covidados (Adcionar ou remover).

---

## 🧩 Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | The project is developed based on technology Node.js® is a free and open source cross-platform JavaScript execution environment that allows programmers to create servers, web applications, command line tools and automation programs task. |
| 🔩 | **Code Quality**  | The codebase follows best practices with automated testing using nox and pytest. It includes linting, formatting, and packaging commands in the Makefile for maintaining code quality. |
| 📄 | **Documentation** | Extensive documentation is provided for setting up the environment, managing dependencies, and automating tasks. |
| 🔌 | **Integrations**  | Key integrations include Nodemailer para envio de e-mails como servidor SMTP |
| 🧩 | **Modularity**    | The codebase is modular with abstract factory modules for parsers, parsers for various languages and frameworks, and utility functions for file handling and logging. |
| ⚡️  | **Performance**   | The project focuses on efficiency with tools like aiohttp for asynchronous HTTP requests, tenacity for retry logic, and anyio for asynchronous concurrency. |
| 🛡️ | **Security**      | Security measures include handling API keys securely, validating Git repository URLs, and managing file permissions for cloning and fetching repositories. |
| 📦 | **Dependencies**  | Key dependencies include shapely, Prisma, Fastify, SQLite and Zod. |

---

## 🗂️ Repository Structure

```sh
└── plamm.er
    ├── img.shields.io
    ├── prisma
    ├── src
    ├── .env.example
    ├── .gitignore
    ├── LICENSE
    ├── package.json
    ├── tsconfig.json
```

---

## 🚀 Getting Started

**System Requirements**

* **Node.js**: `version 20.15.1`
* **npm**: `version 10.7.0`

### ⚙️ Installation

<h4>From <code>source</code></h4>

> 1. Clone the repository:
>
> ```console
> $ git clone https://github.com/diego64/plamm.er
> ```
>
> 2. Change to the project directory:
> ```console
> $ plamm.er/api
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```
> 4. Install the database:
> ```console
> $ npx prisma migrate dev --name init
> ```
> 5. Start the application:
> ```console
> $ npm run start:dev
> ```

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

I would like to acknowledge the Rocketseat Educational Institution, which led and guided the correct use of the tools used in the project.

[**Return**](#-overview)

---
