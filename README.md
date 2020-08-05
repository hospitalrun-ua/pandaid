# PandAid
[![Build Status](https://github.com/wixplosives/sample-monorepo/workflows/tests/badge.svg)](https://github.com/wixplosives/sample-monorepo/actions)

Онлайн платформа - інструмент, який дає змогу координувати дії між благодійними, волонтерських організаціями та організаціями які потребують допомоги. [Детальний Опис проекту](https://github.com/hospitalrun-ua/pandaid/wiki)

Якщо ви розробник і хочете доєднатись до проекту - заповніть невелику форму https://forms.gle/GddYNNfEierWEJny6

## Repository structure
- Frontend [https://github.com/hospitalrun-ua/frontend](https://github.com/hospitalrun-ua/frontend)
- Backend [packages/server](https://github.com/hospitalrun-ua/pandaid/tree/master/packages/server)

[Lerna deployment information](https://github.com/hospitalrun-ua/pandaid/blob/master/DEPLOYMENT.md)

## Technical Stack

Stack | Technology | Decision | Comment
--- | --- | --- | ---
Language | **Typescript** | `Decided` |
Backend | **NodeJS** | `Decided` | Quick to set up, popular, easy for front-end to read backend code
Frontend | **React** | `Decided` | Popular, easy to work with
Repository | **Monorepo** | `Decided` | Front-end and back-end are together
API | **REST** | `Decided` | Front-end and back-end are together
Hosting | **AWS** | `Decided` | We have credit
Backend Framework | **[Nest.JS](https://docs.nestjs.com/)** | `Decided` | Considedred Nest.JS, Loopback, pure Express
Backend Database | **???** | `Postponed` | Most likely PostgreSQL, less likely MongoDB

## Links
| [Backend tasks](https://trello.com/b/1HI9XBdG/backend) |
| --- |
| [Frontend tasks](https://github.com/hospitalrun-ua/frontend/issues) |
| [Design guide](https://www.figma.com/file/a8zZGZXslthCfmXEPH2kak/%F0%9F%92%8AHospitalrun---Map?node-id=351%3A0) |
| --- |

# Nest.js

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Running the app

```bash
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
# e2e tests
$ npm run test:e2e
# test coverage
$ npm run test:cov
```
