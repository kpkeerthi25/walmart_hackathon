class DataVisualizationService {
  static API = 'http://localhost:5000/api';

  static async fetch(): Promise<any> {
    const userId: number = 1;
    const res = await fetch(this.API + '/' + userId);
    return res.json();
  }
}

export default DataVisualizationService;
