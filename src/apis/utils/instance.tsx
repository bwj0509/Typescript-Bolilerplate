import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // 기본 설정 등 필요한 구성 옵션 추가
});

export default instance;
