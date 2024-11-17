import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import { API_URL, SECRET_KEY } from '@env';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'x-private-key': SECRET_KEY
  },
  baseURL: API_URL
});


export default api;