"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var isDev = require("electron-is-dev");
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
            devTools: isDev
        }
    });
    mainWindow.loadURL(isDev
        ? "http://localhost:3000"
        : "file://".concat(path.join(__dirname, "../build/index.html")));
    if (isDev) {
        mainWindow.webContents.openDevTools({ mode: "detach" });
    }
    mainWindow.setResizable(true);
    mainWindow.on("closed", function () { return (mainWindow = null); });
    mainWindow.focus();
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
