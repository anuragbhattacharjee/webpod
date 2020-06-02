import axios from "axios";
const KEY = "AIzaSyDg4p3Spga0EwXFjTm-o2GgjpZ0cGnA4Fo";

export const baseTerms = {
  part: "snippet",
  maxResults: 5,
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});
