import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '199127126cb24affbf57195eaf39f123'
  }
})