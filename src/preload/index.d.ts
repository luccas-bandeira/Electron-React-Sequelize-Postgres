import { ElectronAPI } from '@electron-toolkit/preload'
import User, { UserCreationAttributes } from '../main/database/models/User';
declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      createUser: (userData: UserCreationAttributes) => Promise<User>;
      getUsers: () => Promise<User[]>;
    };
  }
}
