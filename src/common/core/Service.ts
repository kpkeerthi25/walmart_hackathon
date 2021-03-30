import store from "../redux/store";
import JWT from "../types/JWT";

export default class Service {
  static API = "http://localhost:7000/staff/";
  static async fetch(url: string, payload: any): Promise<any> {
    const jwt: JWT | null = store.getState().authentication.jwt;
    const collegeId: number = jwt ? jwt.payload.collegeId : -1;
    const res = await fetch(Service.API + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        collegeId,
        jwt,
      }),
    });
    const resJson = await res.json();
    if (resJson.message) {
      throw new Error(resJson.message);
    }
    return resJson;
  }

  static async fetchVoid(url: string, payload: any): Promise<void> {
    const jwt: JWT | null = store.getState().authentication.jwt;
    const collegeId: number = jwt ? jwt.payload.collegeId : -1;
    const res = await fetch(Service.API + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        collegeId,
        jwt,
      }),
    });
    if (res) {
      const resJson = await res.json();
      throw new Error(resJson.message);
    }
  }
}
