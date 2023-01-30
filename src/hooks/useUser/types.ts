export interface UserCredentials {
  username: string;
  password: string;
}

export interface RegisterData extends UserCredentials {
  email: string;
}

export interface AxiosResponseBody {
  details?: {
    body: [
      {
        message: string;
      }
    ];
  };
  error?: string;
}

export interface User {
  id: string;
  token: string;
  username: string;
}
