import type { BrowserWindow, IpcMainInvokeEvent } from 'electron';
import { dialog, clipboard } from 'electron';

export const handleFileOpen = async (window: BrowserWindow) => {
  const { canceled, filePaths } = await dialog.showOpenDialog(window, {});
  if (canceled) {
    return;
  } else {
    return filePaths[0];
  }
};

export const handleClipboardCopy = async (event: IpcMainInvokeEvent, args: string[]) => {
  clipboard.writeText(args[0]);
};
