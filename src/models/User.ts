import { IAddress } from "./address";
import { TRole } from "./role";

interface User {
    name: string;
    surname: string;
    phone: number;
    password: string;
    role: TRole;
    email?: string;
    sector?: string;
    address?: IAddress;
    isInterviewer?: boolean;
}

export default User;
