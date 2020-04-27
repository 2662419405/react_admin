import Axios from "axios";
import Config from "../config";

export interface IAxios {
  url: string;
  methods?: string;
  isShow?: boolean;
  data?: object;
}

export class myAxios {
  static getData(options: IAxios) {
    if (options && options.isShow) {
      let loading = document.getElementById("ajaxLoading") as HTMLElement;
      loading.style.display = "block";
    }
    return new Promise((resolve, reject) => {
      Axios({
        url: `${Config.BaseURL}${options.url}`,
        method: "get",
        timeout: 3000,
      }).then((response) => {
        if (options && options.isShow) {
          let loading = document.getElementById("ajaxLoading") as HTMLElement;
          loading.style.display = "none";
        }
        if (response.status === 200) {
          if (response.data.code === "0") {
            resolve(response.data);
          }
        } else {
          reject(response.data.data);
        }
      });
    });
  }
}
