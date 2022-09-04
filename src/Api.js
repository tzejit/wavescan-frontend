import axios from 'axios';

export default axios.create({
  baseURL: "https://wavescanbackend.herokuapp.com/"
});
