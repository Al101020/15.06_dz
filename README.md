ДЗ - Жизненый цикл компонента
https://github.com/netology-code/ra16-homeworks/tree/ra-51/lifecycle-http

2026.01.15
	Создал на гитХаб новый(пустой) репозиторий: 15.06_dz
	Клонировал к себе на ПК(с помощью Git Bash Here):
git clone https://github.com/Al101020/15.06_dz.git
	Перешёл в проект:
cd 15.06_dz
	Запустил VSCode(из созданной папки)
code -n .

	В тенрминале запустил установку(Vite):
yarn create vite my-app --template react
	my-app - наименование проекта(каталог-название).
	После установки появилась папка my-app, теперь содержимое этой папки перекидываю в родительскую папку:
mv my-app/* ./
	и файл .gitignore:
mv my-app/.* ./
	А папку my-app удаляю.

	Установил зависимости командой:
yarn
	Запуск сервера(запустился на - http://localhost:5173/):
yarn dev
	В Chrome открыл вкладку http://localhost:5173/.
	
	Проверка кода с помощью Eslint:
yarn lint
	и автоисправление:
yarn lint --fix
	
========================================================
git status
  красным выделенно всё что не добавлено
  теперь добавляем
git add -A
  дальше создаём commit
git commit -m "commit-1"  надо было git commit -m "init"
  и уже загружаем на GitHub:
git push
=========================================================



++++++++++++++++++++++++++++++++++++++++++++++++++++

0. Жизненный цикл и работа с HTTP
===

Необходимо выполнить и предоставить на проверку следующие задачи:

1. [Мировые часы](watches).
2. [CRUD](crud).
3. [Чат](chat) — необязательная задача.

Все три задачи лучше сдавать в разных репозиториях, то есть через create-react-app реализовать три проекта, чтобы не
было конфликта стилей. Но если вы позаботитесь о том, что конфликта не будет, то можете сдавать и в одном проекте.

Рекомендуем выполнять задачи с использованием классовых компонентов.

#### Альтернативный способ создания приложения React с использованием тулинга Vite

Приложение также можно создать используя инструмент Vite.
Документация по созданию приложения [React](https://vitejs.dev/guide/).

1. Откройте терминал и пропишите следующую команду: `yarn create vite my-app --template react`,
   либо `yarn create vite my-app --template react-ts`, если
   нужен шаблон с TypeScript. Эта команда создаст настроенный
   шаблонный проект.
2. Откройте созданный проект в своей IDE.
3. Установите зависимости.
4. Готово. Чтобы запустить приложение, введите команду: `yarn dev`(либо `npm run dev`).

++++++++++++++++++++++++++++++++++++++++++++++++++++

1. Мировые часы
===

Наверняка вы видели в офисах многих компаний установленные часы, показывающие время в разных столицах мира:
* New York,
* Moscow,
* London,
* Tokyo.

![Watches](./src/assets/watches.png)

Общая механика:

1. Вы заполняете поля «Название» и «Временная зона», указываете смещение в часах относительно Гринвича и нажимаете кнопку «Добавить».
2. Часы автоматически добавляются и, что самое важное, начинают тикать, то есть отсчитываются секунды, минуты и часы.
3. При нажатии на крестик рядом с часами часы автоматически удаляются, при этом все подписки — `setTimeout`, `setInterval` и другие — должны вычищаться в соответствующем методе жизненного цикла.

Упрощения: если вам сложно реализовать механику со стрелками через css — см. `transform` и `rotate()`, то вы можете сделать цифровые часы, где отображаются только цифры в формате: ЧЧ:ММ:СС.

Подсказки:
1. Посмотреть текущий TimezoneOffset вы можете, используя объект `Date`.
2. Можете использовать библиотеку Moment.js.

++++++++++++++++++++++++++++++++++++++++++++++++++++

2. CRUD
===

Вам необходимо реализовать базовый CRUD без обновления при работе с HTTP.

Backend вы можете либо написать сами, либо взять готовый из каталога `backend`.

![CRUD](./src/assets/crud.png)

## Общая механика

Первоначальная загрузка: делается http-запрос GET на адрес http://localhost:7070/notes, полученные данные отображаются в виде карточек с возможностью удаления.

Добавление:
1. Вы заполняете форму и нажимаете кнопку «Добавить».
2. Выполняется http-запрос POST на адрес http://localhost:7070/notes, в теле запроса передаётся следующий JSON:
```json
{
	"id": 0,
	"content": "То, что было введено в поле ввода"
}
```
3. После чего делается запрос на получение всех записей и происходит обновление списка — GET http://localhost:7070/notes.

Удаление:
1. Вы нажимаете на крестик на одной из карточек.
2. Выполняется http-запрос DELETE на адрес http://localhost:7070/notes/{id}, где id — это идентификатор заметки.
3. После чего делается запрос на получение всех записей и происходит обновление списка — GET http://localhost:7070/notes.

Обновление:
1. Вы нажимаете на кнопку «Обновить» — две зелёные стрелочки.
2. После чего делается запрос на получение всех записей и происходит обновление списка — GET http://localhost:7070/notes.



====================================================
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
