import store from '../redux/store';

export default class Controller {
  static API = 'http://192.168.43.43:7000';

  static async fetch(url: string, payload: any): Promise<any> {}

  static async fetchVoid(url: string, payload: any): Promise<void> {}

  static async fetchCall(url: string, payload: any): Promise<any> {}
}
