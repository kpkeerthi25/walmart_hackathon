export interface DataVisualizationState {
  brandList: Brand[];
  categoryData: CategoryDataWrapper;
  totalSaved: number;
  mostProfitableProductList: Product[];
  totalProducts: number;
  longestInCartList: Product[];
  importData: ImportData;
  monthList: MonthlyPurchaseData;
  title: string;
}

export class ImportData {
  local: number = 150;
  imported: number = 250;
}

export class CategoryDataWrapper {
  items: CategoryData = new CategoryData();
  cost: CategoryData = new CategoryData();
  discount: CategoryData = new CategoryData();
}

export class CategoryData {
  labels: string[] = [];
  data: number[] = [];
}

export class MonthlyPurchaseData {
  items: number[] = [];
  cost: number[] = [];
  discount: number[] = [];
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Product {
  name: string;
  image: string;
  price: number;
}

const initialState: DataVisualizationState = {
  brandList: [],
  categoryData: new CategoryDataWrapper(),
  totalSaved: 0,
  mostProfitableProductList: [],
  totalProducts: 17852,
  longestInCartList: [],
  importData: new ImportData(),
  monthList: new MonthlyPurchaseData(),
  title: 'Ajay AT',
};

export default initialState;
