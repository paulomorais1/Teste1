import User from "@/models/User"

interface SignInResponse {
  body: User;
  message: string;
}

const AuthenticationService = {
  login: async (phone: number, password: string): Promise<User | null> => {
    try {
      console.log('Enviando solicitação de login...');

      const requestOptions: RequestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({phone, password}),
      };

      // Enviar solicitação de login para o servidor usando fetch
      const response = await fetch(
        'http://10.0.2.2:8080/api/v1/auth/user/sign-in',
        requestOptions,
      );

      if (!response.ok) {
        // Se a resposta não estiver OK, lança um erro
        throw new Error('Erro ao fazer login. Status: ' + response.status);
      }

      // Converter a resposta para JSON
      const data: SignInResponse = await response.json();

      // Log da resposta da solicitação de login
      console.log('Resposta da solicitação de login:', data);

      // Verificar se a resposta contém os dados do usuário
      if (data && data.body) {
        return data.body;
      } else {
        console.error('Resposta inválida do servidor');
        return null;
      }
    } catch (error:any) {
      // Log de erro caso ocorra um erro durante o login
      console.error('Erro ao fazer login:', error.message);

      // Retornar null em caso de erro
      return null;
    }
  },
};

export default AuthenticationService;
