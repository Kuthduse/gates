const express = require("express");
const app = express();
const PORT = process.env.SERVER_PORT || process.env.PORT || 3000;

// 其他模块可以在后续功能中使用
const axios = require("axios");
const os = require('os');
const fs = require("fs");
const path = require("path");
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const { execSync } = require('child_process');     

// 根路由
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// 示例：返回服务器信息
app.get("/info", (req, res) => {
  res.json({
    platform: os.platform(),
    cpus: os.cpus().length,
    memory: os.totalmem()
  });
});

// 启动服务器
app.listen(PORT, () => console.log(`HTTP server is running on port: ${PORT}!`));
