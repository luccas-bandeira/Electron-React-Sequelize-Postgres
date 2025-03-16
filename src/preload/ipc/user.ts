import { ipcRenderer } from 'electron';

export const userIpc = {
  createUser: async (userData) => await ipcRenderer.invoke('create-user', userData),
  getUsers: async () => await ipcRenderer.invoke('get-users')
}