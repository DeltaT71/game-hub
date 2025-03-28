import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f24d58e2568d41dc9886c13bd836cd12",
  },
});
