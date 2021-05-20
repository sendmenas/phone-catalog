import { history } from "./history";

export const getData = (url, callback) =>
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => callback(data))
    .catch((error) => {
      history.push("/error");
    });
