import axios from "axios";

const BASE_URL = "http://localhost:7000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2NiNjU2NTA2ZDE1MmQ2NDc5YWZhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjM0MDMyNCwiZXhwIjoxNjUyNTk5NTI0fQ.9HOdXE-3Ky16T4SrWYkrWvcuoaE3uuXKobTv-2PfccQ"

export const  publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const  userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
})