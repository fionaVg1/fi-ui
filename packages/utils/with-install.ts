import type { App, Plugin,Component } from 'vue';
export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name || 'FiIcon',comp as Component);
  }
  return comp as SFCWithInstall<T>;
}
