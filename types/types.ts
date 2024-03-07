export interface Login {
  username: string;
  password: string;
}

export interface UserRequest {
  financialStatus: string;
  username: string;
  password: string;
}

export interface UserResponse {
  userId: number;
  fullName: string;
  email: string;
  role: string;
  status: string;
  registeredBy: string;
  lastLoggedIn: string;
  registeredAt: string;
  passwordChanged: boolean;
  updatedAt: string;
}
