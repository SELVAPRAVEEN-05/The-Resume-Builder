import AsyncStorage from '@react-native-async-storage/async-storage';
import API from './axios';

interface AuthResponse {
  token: string;
  user?: any;
}

export const loginUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const res = await API.post('/auth/login', { email, password });
  const data = res.data;

  if (data?.token) {
    await AsyncStorage.setItem('token', data.token);
  }

  return { token: data.token, user: data.user };
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  const res = await API.post('/auth/register', { name, email, password });
  const data = res.data;

  if (data?.token) {
    await AsyncStorage.setItem('token', data.token);
  }

  return { token: data.token, user: data.user };
};

export const logout = async () => {
  await AsyncStorage.removeItem('token');
};
