import { ipcMain } from 'electron';
import User from '../database/models/User';

export function UserIpcHandlers(){
     ipcMain.handle('get-users', async () => {
        return await User.findAll({ raw: true });
      });
    
      ipcMain.handle('create-user', async (_, userData) => {
        const user = await User.create(userData);
        return user.get()
      });
    }