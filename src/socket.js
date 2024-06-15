import { io } from "socket.io-client";
const URL =  'https://whiteboard-server-3xxj.onrender.com/';
export const socket = io(URL);