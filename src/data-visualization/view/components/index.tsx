import * as React from 'react';
import BrandLoyalty from './Widgets/BrandLoyalty';
import {DataVisualizationState} from '../../redux/initialState';
import PurchaseCategory from './Widgets/PurchaseCategory';
import Saved from './Widgets/Saved';
import TotalPurchases from './Widgets/TotalPurchases';
import MonthlyData from './Widgets/MonthlyData';
import ProfitableProducts from './Widgets/ProfitableProducts';
import LongestCart from './Widgets/LongestCart';
import ImportData from './Widgets/ImportData';
import Title from './Widgets/Title';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';
import {Card} from '@blueprintjs/core';

export default function (props: DataVisualizationState) {
  return (
    <div style={styles.container} className={DARK}>
      <PurchaseCategory categoryData={props.categoryData} />
      <MonthlyData monthList={props.monthList} />
      <ImportData importData={props.importData} />
      <TotalPurchases
        totalSaved={props.totalSaved}
        totalProducts={props.totalProducts}
        title={props.title}
      />
      <Saved totalSaved={props.totalSaved} />
      <Title title={props.title} />
      <LongestCart longestInCartList={props.longestInCartList} />
      <BrandLoyalty brandList={props.brandList} />
      <ProfitableProducts
        mostProfitableProductList={props.mostProfitableProductList}
      />
    </div>
  );
}

const styles: any = {
  container: {
    alignSelf: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5,
  },
};
