const { app, BrowserWindow, Tray, Menu } = require('electron');
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

const resourcePath = process.env.NODE_ENV === 'dev' ? __dirname : process.resourcesPath;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    skipTaskbar: true,
    frame: false,
    autoHideMenuBar: true,
    backgroundColor: '#00FFFFFF',
    transparent: true,
    titleBarStyle: 'hidden',
    thickFrame: false,
  });

  win.on('blur', () => {
    const [w, h] = win.getSize();
    win.setSize(w, h);
  });

  win.on('focus', () => {
    const [w, h] = win.getSize();
    win.setSize(w, h);
  });

  win.loadURL(process.env.NODE_ENV === 'dev' ? devUrl : startUrl);
}

app.whenReady().then(() => {
  const tray = new Tray(path.join(resourcePath, 'assets', 'trayicon.png'));
  tray.setToolTip('Waiting for Christmas...');
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Quit', type: 'normal', click: (menuItem, window, event) => {
      app.quit()
    }},
  ])
  tray.setContextMenu(contextMenu);

  createWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})