/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const jsonServer = require("json-server");
// const jwt = require("jsonwebtoken");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

// Нужно для небольшой задержки, иммитация реального api

server.use(async(res, req, next) => {
  await new Promise((res) => {
    setTimeout(res, 800)
  })

  next()
});

// Проверяем авторизирован ли пользователь

server.use(async(req, res, next) => {
  if(!req.headers.authorization) {
    return res.status(403).json({message: "AUTH ERROR"})
  }

  next()
});

server.use(jsonServer.defaults());
server.use(router);

// Эндпоиинт для логина

server.post("/login", (res, req) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.feadFileSync(path.resolve(__dirname, "db.json"), "UTF-8  "));
  const { users } = db;

  const userFromBd = users.find(
    (user) => user.username === username && user.password === password
  );

  if(userFromBd) {
    return res.json(userFromBd);
  }

  return  res.status(403).json({message: "AUTH ERROR"});
})

// Запуск сервера

server.listen(8000, () => {
  console.log("JSON Server is running")
});