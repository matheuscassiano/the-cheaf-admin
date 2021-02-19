import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import {
  InputContainer,
  Input,
  OrdersContainer,
  Label,
  Button,
  Table,
  TH,
  TD,
} from '../../../styled-components';
import LargeModal from '../../../styled-components/large-modal';
import Order from '../../../styled-components/order';
import { CardContentItem } from '../../../styled-components/order/styles';
import { OrderInfo } from './styles';

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
        <OrderInfo>
          <h2>Mesa 12</h2>
          <InputContainer>
            <Label>Selecione o atendente</Label>
            <Input placeholder="Atendente" />
          </InputContainer>
          <InputContainer>
            <Label>Selecione o cliente</Label>
            <Input placeholder="&#128269;  Buscar por cliente" />
          </InputContainer>
          <InputContainer>
            <Label>Observações</Label>
            <Input placeholder="Observações" />
          </InputContainer>
          <Button>oiu</Button>
        </OrderInfo>
        <Table>
          <tr>
            <TH>Produtos</TH>
            <TH>Quant.</TH>
            <TH>Valor un.</TH>
            <TH>Valor total</TH>
            <TH>Tempo</TH>
            <TH>Cozinha</TH>
            <TH />
          </tr>
          <tr>
            <TD>Picanha na Chapa com Fritas</TD>
            <TD>3 Uns</TD>
            <TD>R$ 3.00</TD>
            <TD>R$ 9.00</TD>
            <TD>00:25</TD>
            <TD>------</TD>
            <TD>------</TD>
          </tr>
        </Table>
      </LargeModal>
    </>
  );
};

export default injectIntl(BlankPage);
