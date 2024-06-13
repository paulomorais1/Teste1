// services/UserService.ts
import User from "@/models/User"; // Ajuste o caminho conforme necessário

const getAllUsers = async (): Promise<User[] | string> => {
  try {
    const response = await fetch("http://192.168.15.10:8080/api/v1/user/get-all");
    const result = await response.json();
    if (response.ok) {
      return result.body as User[]; // Assegure que 'body' contém o array de usuários
    } else {
      return "Error fetching users";
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    return "Error fetching users";
  }
};

export default { getAllUsers };
