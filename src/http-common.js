import axios from "axios";

export default axios.create({
  baseURL: "https://eu-west1-partner08-dev.apigee.net",
  headers: {
    "Content-type": "application/json"
  }
});
