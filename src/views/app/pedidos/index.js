import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { OrdersContainer } from '../../../styled-components';
import LargeModal from '../../../styled-components/large-modal';
import Order from '../../../styled-components/order';
import { CardContentItem } from '../../../styled-components/order/styles';

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
            <Order title="1" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
            <Order title="9" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
            <Order title="9" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
            <Order title="9" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
            <Order title="9" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
            <Order title="9" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
            <Order title="9" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
            <Order title="9" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
            <Order title="9" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
            <Order title="9" status="ocupado">
              <CardContentItem>
                <b>Atendente:</b>
                <span>Carla Ferreira</span>
              </CardContentItem>
              <CardContentItem>
                <b>Cliente:</b>
                <span>Matheus Luiz</span>
              </CardContentItem>
              <CardContentItem>
                <b>Status:</b>
                <span>Ocupado</span>
              </CardContentItem>
              <CardContentItem>
                <b>Total:</b>
                <b>R$ 65.00</b>
              </CardContentItem>
            </Order>
          </OrdersContainer>
        </Colxx>
      </Row>
      <LargeModal>
        <h1>sad</h1>
      </LargeModal>
    </>
  );
};

export default injectIntl(BlankPage);
