export {};

declare global {
  interface Window {
    Cal?: (command: string, ...args: unknown[]) => void;
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}
