import {api} from '../axios';

const users = 'user/' ;

async function login(username, password) {
  const res = await api.post(users +'login', {
    username: username,
    password: password,
  });
  return res.data;
}

async function index() {
  const res = await api.post(users)
  return res.data;
}

export default {
  login,
  index
 }

