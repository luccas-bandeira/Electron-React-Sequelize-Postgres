import { ipcMain } from 'electron';
import User, { UserCreationAttributes } from '../database/models/User';

export function UserIpcHandlers(){

     ipcMain.handle('get-users', async (): Promise<User[]> => {
        return await User.findAll({ raw: true });
      });
    
      ipcMain.handle('create-user', async (_, userData: UserCreationAttributes) => {
        const user = await User.create(userData);
        return user.get()
      });
    }