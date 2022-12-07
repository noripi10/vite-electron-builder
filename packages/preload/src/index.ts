/**
 * @module preload
 */

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  clipboardCopy: (args: string[]) => ipcRenderer.invoke('clipboard:copy', args),
});

export { sha256sum } from './nodeCrypto';
export { versions } from './versions';
