class DataVisualizationService {
  static API = 'http://192.168.1.8:7000';

  static async fetch(): Promise<any> {
    const userId: number = 1;
    const res = await fetch(this.API + '/' + userId);
    return res.json();
  }
}

export default DataVisualizationService;
