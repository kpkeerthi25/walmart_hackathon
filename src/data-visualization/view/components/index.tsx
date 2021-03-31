import * as React from 'react';
import {
  CategoryData,
  MonthlyPurchaseData,
  Product,
  ImportData as ImportDataType,
} from '../../redux/initialState';
import PurchaseCategory from './Widgets/PurchaseCategory';
import Saved from './Widgets/Saved';
import TotalPurchases from './Widgets/TotalPurchases';
import MonthlyData from './Widgets/MonthlyData';
import ProfitableProducts from './Widgets/ProfitableProducts';
import LongestCart from './Widgets/LongestCart';
import ImportData from './Widgets/ImportData';
import Title from './Widgets/Title';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';
import {Container, Row, Col} from 'react-bootstrap';
import CostliestProducts from './Widgets/CostliestProducts';
import {useEffect} from 'react';

interface Props {
  categoryDataList: CategoryData[];
  totalSaved: number;
  mostProfitableProductList: Product[];
  costliestProductList: Product[];
  totalProducts: number;
  longestInCartList: Product[];
  importData: ImportDataType;
  monthList: MonthlyPurchaseData;
  title: string;
  fetchData: () => void;
}

export default function (props: Props) {
  useEffect(() => {
    if (props.totalSaved < 0) {
      props.fetchData();
    }
  }, [props.totalSaved]);

  return (
    <Container
      fluid
      style={{...styles.container, background: 'black'}}
      className={DARK}>
      <Row style={{width: 'inherit', marginBottom: 20}}>
        <Col lg={4} md={6} sm={12}>
          <PurchaseCategory categoryDataList={props.categoryDataList} />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <MonthlyData monthList={props.monthList} />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ImportData importData={props.importData} />
        </Col>
        {/* </Row>
      <Row style={{width: 'inherit', marginBottom: 30}}> */}
        <Col lg={4} md={6} sm={12}>
          <TotalPurchases
            totalSaved={props.totalSaved}
            totalProducts={props.totalProducts}
            title={props.title}
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Saved totalSaved={props.totalSaved} />
        </Col>
        <Col lg={4} md={6} sm={12}>
          {' '}
          <Title title={props.title} />
        </Col>
        {/* </Row>
      <Row style={{width: 'inherit'}}> */}
        <Col lg={4} md={6} sm={12}>
          <LongestCart longestInCartList={props.longestInCartList} />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <CostliestProducts
            costliestProductList={props.costliestProductList}
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ProfitableProducts
            mostProfitableProductList={props.mostProfitableProductList}
          />
        </Col>
      </Row>
    </Container>
  );
}

const styles: any = {
  container: {
    margin: 0,
    alignSelf: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
  },
};
