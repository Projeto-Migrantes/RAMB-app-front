import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';

const api = axios.create({
  baseURL: 'https://api-ramb.up.railway.app/api/v1', 
  headers: { 'Content-Type': 'application/json' }
});


export default api;