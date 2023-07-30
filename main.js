const { app, BrowserWindow } = require('electron');
function createWindow() {
    win = new BrowserWindow({width: 1460, height: 824, autoHideMenuBar: true});
    win.loadFile('dist/xyz-viewer/index.html');
};

app.whenReady().then(() => {
    createWindow()
});