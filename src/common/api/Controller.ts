import store from "../redux/store";
import AuthenticationService from "../../authentication/core/AuthService";

export default class Controller {
  static API = "http://192.168.43.43:7000";

  static async fetch(url: string, payload: any): Promise<any> {
    console.log(this.API);
    const res = await this.fetchCall(url, payload);
    let resJson = await res.json();
    if (resJson.message === "JWT Expired") {
      await AuthenticationService.renewJWT();
      const res = await this.fetchCall(url, payload);
      resJson = await res.json();
    } else if (resJson.message) {
      throw new Error(resJson.message);
    }
    return resJson;
  }

  static async fetchVoid(url: string, payload: any): Promise<void> {
    const jwt: string | null = store.getState().authentication.jwt;
    const res: any = await this.fetchCall(url, payload);
    if (res) {
      try {
        const resJson = await res.json();
        if (resJson.message === "JWT Expired") {
          await AuthenticationService.renewJWT();
        }
        const res2: any = await this.fetchCall(url, payload);
        if (res2) {
          const resJson2 = await res2.json();
          throw new Error(resJson2.message);
        }
      } catch (e) {
        console.log("AAAAAAAAAAA");
      }
    }
  }

  static async fetchCall(url: string, payload: any): Promise<any> {
    const jwt: string | null = store.getState().authentication.jwt;
    return fetch(Controller.API + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
      body: JSON.stringify({
        ...payload,
      }),
    });
  }
}
