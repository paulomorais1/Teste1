import {TRole} from './role';

interface User {
   name: string;
   phone: number;
   password: string;
   role: TRole;
}

export default User;
