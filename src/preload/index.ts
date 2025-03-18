import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { userIpc } from './ipc/userIpc'

// Custom APIs for renderer
const api = {
  user: userIpc,
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  (window as any).electron = electronAPI
  // @ts-ignore (define in dts)
  (window as any).api = api
}
