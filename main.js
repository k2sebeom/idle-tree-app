const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');


const startUrl = url.format({
  pathname: path.join(__dirname, './build/index.html'),
  protocol: 'file:',
  slashes: true,
})

const devUrl = url.format({
  protocol: 'http',
  hostname: 'localhost',
  port: 3000,
})

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 400,
    skipTaskbar: true,
    frame: false,
    autoHideMenuBar: true,
    backgroundColor: '#00FFFFFF',
    transparent: true,
    titleBarStyle: 'hidden'
  });

  win.loadURL(process.env.NODE_ENV === 'dev' ? devUrl : startUrl);
}

app.whenReady().then(() => {
  createWindow()
})

