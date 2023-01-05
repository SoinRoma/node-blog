<h1 align="center">Node.js-Blog</h1>

## Описание

Базовая блог с полным CRUD, написанный на Node.js.
Используется Express, EJS, Mongoose и в качестве базы данных MongoDB.

### Используемые технологии

![Node](https://img.shields.io/badge/-Node-black?style=flat-square&logo=node)
![Express](https://img.shields.io/badge/-Express-black?style=flat-square&logo=express)
![Ejs](https://img.shields.io/badge/-Ejs-black?style=flat-square&logo=ejs)
![Mongoose](https://img.shields.io/badge/-Mongoose-black?style=flat-square&logo=mongoose)
![Nodemon](https://img.shields.io/badge/-Nodemon-black?style=flat-square&logo=nodemon)

### Настройка базы данных

В проекте используется база данных MongoDB. Чтобы установить свою вам придётся зарегистрироваться и создать свой проект
и свою базу данных и изменить следующие настройки в файле `server.js`

```
const db ="mongodb+srv://admin:123@cluster.s8r7jzz.mongodb.net/node_blog?retryWrites=true&w=majority";
```

Здесь также нужно указать ваш логин и пароль от базы и название самой базы данных.

### Запуск проекта

1. Запуска в режиме разработки (открытие сервера и страницы в браузере)

```
npm run dev
```

2. Запуск приложения

```
npm start
```
