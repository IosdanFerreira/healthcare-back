export class IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  phone: string;
  address?: string;
  privacy_consent: boolean;
  role: {
    id: number;
    role_name: string;
  };
  deleted?: boolean;
  created_at: Date;
  updated_at: Date;
}
