const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs').promises;

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    icon: path.join(__dirname, 'icon.png'),
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
  win.setMenuBarVisibility(false);
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Создание директории
ipcMain.handle('mkdir', async (event, dirPath) => {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    return 'Directory created successfully!';
  } catch (err) {
    return `Failed to create directory: ${err.message}`;
  }
});