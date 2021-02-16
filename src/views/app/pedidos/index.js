import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { OrdersContainer } from '../../../styled-components';
import Order from '../../../styled-components/order';

const BlankPage = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.default" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" className="mb-4">
          <OrdersContainer>
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
            <Order status="ocupado" />
          </OrdersContainer>
        </Colxx>
      </Row>
    </>
  );
};

export default injectIntl(BlankPage);
