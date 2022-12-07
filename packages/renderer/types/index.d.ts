export {};

declare global {
  interface Window {
    electronAPI: {
      openFile: () => string;
      clipboardCopy: (args: string[]) => void;
    };
  }
}
