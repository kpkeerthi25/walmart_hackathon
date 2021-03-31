export interface DataVisualizationState {
  categoryDataList: CategoryData[];
  totalSaved: number;
  mostProfitableProductList: Product[];
  costliestProductList: Product[];
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

export class CategoryData {
  label: string = '';
  items: number = 0;
  cost: number = 0;
  discount: number = 0;
}

export class MonthlyPurchaseData {
  items: number[] = [12, 14, 10, 8, 18, 3, 26, 12, 10, 9, 2];
  cost: number[] = [102, 140, 80, 28, 118, 30, 260, 12, 10, 9, 2];
  discount: number[] = [12, 14, 10, 8, 18, 3, 26, 12, 10, 9, 2];
}

export interface Product {
  name: string;
  image: string;
  price: number;
}

const categoryList: CategoryData[] = [
  {label: 'Food', discount: 10, items: 12, cost: 60},
  {label: 'Bus', discount: 0, items: 1, cost: 5},
  {label: 'Electro', discount: 20, items: 2, cost: 30},
];

const productList: Product[] = [
  {
    name: "Champion Big & Tall Men's Middleweight Hoodie",
    price: 1598,
    image:
      'https://i5.walmartimages.com/asr/e74e2f6d-134f-4ed0-b410-d8e796c66ea8.9811d89ce9be9f03efd7d5e7788eef76.jpeg?odnWidth=100&odnHeight=100&odnBg=ffffff',
  },
  {
    name: "Champion Big & Tall Men's Middleweight Hoodie",
    price: 1598,
    image:
      'https://i5.walmartimages.com/asr/e74e2f6d-134f-4ed0-b410-d8e796c66ea8.9811d89ce9be9f03efd7d5e7788eef76.jpeg?odnWidth=100&odnHeight=100&odnBg=ffffff',
  },
  {
    name: "Champion Big & Tall Men's Middleweight Hoodie",
    price: 1598,
    image:
      'https://i5.walmartimages.com/asr/e74e2f6d-134f-4ed0-b410-d8e796c66ea8.9811d89ce9be9f03efd7d5e7788eef76.jpeg?odnWidth=100&odnHeight=100&odnBg=ffffff',
  },
];

const initialState: DataVisualizationState = {
  categoryDataList: categoryList,
  totalSaved: -1,
  totalProducts: 17852,
  importData: new ImportData(),
  monthList: new MonthlyPurchaseData(),
  title: 'Ajay AT',
  mostProfitableProductList: productList,
  costliestProductList: productList,
  longestInCartList: productList,
};

export default initialState;
