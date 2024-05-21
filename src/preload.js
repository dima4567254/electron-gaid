const { contextBridge, ipcRenderer } = require('electron');

// console.log('Preload script loaded');

contextBridge.exposeInMainWorld('electron', {
  mkdir: (dirPath) => ipcRenderer.invoke('mkdir', dirPath)
});