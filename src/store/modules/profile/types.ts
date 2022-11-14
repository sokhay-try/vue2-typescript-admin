export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  name: string;
}

export interface ProfileState {
  user?: IUser;
  error: boolean;
}
