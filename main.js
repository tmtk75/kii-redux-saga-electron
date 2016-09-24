const path = require("path");
const electron = require('electron');
const loadDevtool = require('electron-load-devtool');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Tray = electron.Tray;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const appIcon = new Tray(path.resolve(__dirname, 'tray.png'));

  const win = new BrowserWindow({
    width: 400,
    height: 200,
    'node-integration': false,
    //transparent: true,
    frame: false,
  });

  win.loadURL(`file://${__dirname}/index.html`);

  //win.webContents.openDevTools();

  win.webContents.on('did-finish-load', () => {
  });

  loadDevtool(loadDevtool.REDUX_DEVTOOLS);
  loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
});

//console.log("default appData",  app.getPath("appData"));
//console.log("default userData", app.getPath("userData"));
app.setPath("appData",  path.join(__dirname, "./.appData"));
app.setPath("userData", path.join(__dirname, "./.userData"));
