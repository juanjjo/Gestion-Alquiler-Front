export interface Perfil {
  id: number;
  apellido: string;
  nombre: string;
  dni: number;
  email: string;
  telefono: string;
}

export interface Data {
  id: number;
  usuario: string;
  password: string;
  activo: number;
  rol: string;
  id_perfil: Perfil;
}

export interface Success {
  data: Data;
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface LoginUser{
  success: Success;
}
