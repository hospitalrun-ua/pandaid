# PandAid
[![Build Status](https://github.com/wixplosives/sample-monorepo/workflows/tests/badge.svg)](https://github.com/wixplosives/sample-monorepo/actions)

Онлайн платформа - інструмент, який дає змогу координувати дії між благодійними, волонтерських організаціями та організаціями які потребують допомоги. [Детальний Опис проекту](https://github.com/hospitalrun-ua/pandaid/wiki)

Якщо ви розробник і хочете доєднатись до проекту - заповніть невелику форму https://forms.gle/GddYNNfEierWEJny6

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

## Links
| [Backend tasks](https://trello.com/b/1HI9XBdG/backend) |
| --- |
