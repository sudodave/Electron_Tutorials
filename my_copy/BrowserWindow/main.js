console.log("main process working");


const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win, dimWindow, colorWindow;
let parentWindow, childWindow;
function createWindow() {
  // win = new BrowserWindow();
  // dimWindow = new BrowserWindow({width: 400, height: 400, maxWidth: 600, maxHeight: 600});
  // colorWindow = new BrowserWindow({backgroundColor: '#228b22'});
  parentWindow = new BrowserWindow({title: 'Parent'});
  childWindow = new BrowserWindow({show: false, parent: parentWindow, modal: true,  title: 'Child'});
  childWindow.loadURL('https://youtube.com');
  childWindow.once('ready-to-show', () => {
    childWindow.show();
  });
}



app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    createWindow();
  }
});
