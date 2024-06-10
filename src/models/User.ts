import { IAddress } from "./address";
import { TRole } from "./role";
interface UserBody {
    id: number;
    name: string;
    surname: string;
    phone: string; // ou number, dependendo do tipo real dos dados
    password: string;
    role: TRole;
    email?: string;
    address?: IAddress;
}

interface User {
    body: UserBody;
}


export default User;
