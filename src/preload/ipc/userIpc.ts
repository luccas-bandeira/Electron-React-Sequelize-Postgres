import { ipcRenderer } from 'electron';
import User, {UserCreationAttributes} from '../../main/database/models/User'

export const userIpc = {
  createUser: async (userData: UserCreationAttributes): Promise<User> => {
    return await ipcRenderer.invoke('create-user', userData)
  },
  getUsers: async (): Promise<User[]> => {
    return await ipcRenderer.invoke('get-users')
  }
}
