# PandAid
[![Build Status](https://github.com/wixplosives/sample-monorepo/workflows/tests/badge.svg)](https://github.com/wixplosives/sample-monorepo/actions)

Онлайн платформа - інструмент, який дає змогу координувати дії між благодійними, волонтерських організаціями та організаціями які потребують допомоги. [Детальний Опис проекту](https://github.com/hospitalrun-ua/backend/wiki/%D0%97%D0%B0%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D0%BE%D0%BF%D0%B8%D1%81-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83)

## Repository structure
Repository is bundled as Monorepo using Lerna
- Frontend [to be set up]
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
Backend Framework | **Nest.JS** | `Considering` | ?(Nest.JS, Loopback) Open for suggestions
Backend Database | **???** | `Postponed` | Most likely PostgreSQL, less likely MongoDB

