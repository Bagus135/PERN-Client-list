/* eslint-disable no-undef */
import axios from "axios";

const axi = axios.create({
    baseURL : import.meta.env.baseURL
})

export default axi