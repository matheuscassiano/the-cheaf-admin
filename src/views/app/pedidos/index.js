import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import {
  InputContainer,
  InputLineContainer,
  Input,
  OrdersContainer,
  Label,
  Button,
  ButtonContainer,
  MinButton,
  TableContainer,
  Table,
  TR,
  TH,
  TD,
  Price,
  OrderList,
  OrderContent,
  FloatButton,
  ModalSearch,
  ScrollHorizontal,
} from '../../../styled-components';
import LargeModal from '../../../styled-components/large-modal';
import Order from '../../../styled-components/order';
import { CardContentItem } from '../../../styled-components/order/styles';
import { OrderInfo } from './styles';
import CategoryCard from '../../../styled-components/CategoryCard';

const BlankPage = ({ match }) => {
  const [moddalPage, setModalPage] = useState('order-list');
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
          <InputLineContainer>
            <InputContainer>
              <Label>Número de pessoas</Label>
              <Input placeholder="Número de pessoas" />
            </InputContainer>
            <InputContainer>
              <Label>Número do Pedido</Label>
              <Input placeholder="Número do Pedido" />
            </InputContainer>
          </InputLineContainer>
          <InputLineContainer>
            <InputContainer>
              <Label>Tempo</Label>
              <Input placeholder="Tempo" />
            </InputContainer>
            <InputContainer>
              <Label>Número Personalizado</Label>
              <Input placeholder="Número Personalizado" />
            </InputContainer>
          </InputLineContainer>
          <OrderList>
            <OrderContent>
              <span>Subtotal</span>
              <Price>R$ 265.00</Price>
            </OrderContent>
            <OrderContent>
              <span>Taxa de Serviço</span>
              <Price>R$ 26.50</Price>
            </OrderContent>
            <OrderContent>
              <span>Taxa de Serviço</span>
              <Price>R$ 26.50</Price>
            </OrderContent>
            <OrderContent>
              <span>Taxa de Serviço</span>
              <Price>R$ 26.50</Price>
            </OrderContent>
            <OrderContent>
              <b>Total</b>
              <Price>R$ 365.50</Price>
            </OrderContent>
          </OrderList>
          <Button color="#08af24">Pagamento</Button>
          <ButtonContainer>
            <MinButton color="#CE6F64">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H5H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 11V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MinButton>
            <MinButton color="#FFB573">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MinButton>
            <MinButton color="#C4C4C4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9V2H18V9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 14H6V22H18V14Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MinButton>
          </ButtonContainer>
        </OrderInfo>
        {moddalPage === 'order-list' ? (
          <TableContainer>
            <Table>
              <TR>
                <TH>Produtos</TH>
                <TH>Quant.</TH>
                <TH>Valor un.</TH>
                <TH>Valor total</TH>
                <TH>Tempo</TH>
                <TH>Cozinha</TH>
                <TH />
              </TR>
              <TR>
                <TD>
                  <b>Picanha na Chapa com Fritas</b>
                  <br />
                  <span>+ Para 3 pessoas</span>
                  <br />
                  <span>+ Batata frita</span>
                </TD>
                <TD>3 Uns</TD>
                <TD>
                  <Price>R$ 3.00</Price>
                </TD>
                <TD>
                  <Price>R$ 9.00</Price>
                </TD>
                <TD>00:25</TD>
                <TD />
                <TD>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 4.5H3.75H15.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 8.25V12.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 8.25V12.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </TD>
              </TR>
              <TR>
                <TD>
                  <b>Picanha na Chapa com Fritas</b>
                </TD>
                <TD>3 Uns</TD>
                <TD>
                  <Price>R$ 3.00</Price>
                </TD>
                <TD>
                  <Price>R$ 9.00</Price>
                </TD>
                <TD>00:25</TD>
                <TD>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="#08AF24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </TD>
                <TD />
              </TR>
              <TR>
                <TD>
                  <b>Picanha na Chapa com Fritas</b>
                  <br />
                  <span>+ Para 3 pessoas</span>
                  <br />
                  <span>+ Batata frita</span>
                </TD>
                <TD>3 Uns</TD>
                <TD>
                  <Price>R$ 3.00</Price>
                </TD>
                <TD>
                  <Price>R$ 9.00</Price>
                </TD>
                <TD>00:25</TD>
                <TD>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M16.6667 5L7.50004 14.1667L3.33337 10"
                        stroke="#08AF24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </TD>
                <TD />
              </TR>
              <TR>
                <TD>
                  <b>Picanha na Chapa com Fritas</b>
                </TD>
                <TD>3 Uns</TD>
                <TD>
                  <Price>R$ 3.00</Price>
                </TD>
                <TD>
                  <Price>R$ 9.00</Price>
                </TD>
                <TD>00:25</TD>
                <TD />
                <TD>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 4.5H3.75H15.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 8.25V12.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 8.25V12.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </TD>
              </TR>
              <TR>
                <TD>
                  <b>Picanha na Chapa com Fritas</b>
                </TD>
                <TD>3 Uns</TD>
                <TD>
                  <Price>R$ 3.00</Price>
                </TD>
                <TD>
                  <Price>R$ 9.00</Price>
                </TD>
                <TD>00:25</TD>
                <TD />
                <TD>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 4.5H3.75H15.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 8.25V12.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 8.25V12.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </TD>
              </TR>
              <TR>
                <TD>
                  <b>Picanha na Chapa com Fritas</b>
                </TD>
                <TD>3 Uns</TD>
                <TD>
                  <Price>R$ 3.00</Price>
                </TD>
                <TD>
                  <Price>R$ 9.00</Price>
                </TD>
                <TD>00:25</TD>
                <TD />
                <TD>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 4.5H3.75H15.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5H14.25Z"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 8.25V12.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 8.25V12.75"
                      stroke="#DE5753"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </TD>
              </TR>
            </Table>
          </TableContainer>
        ) : (
          <>
            <InputContainer>
              <ModalSearch placeholder="&#128269;  Buscar por produtos" />
              <ScrollHorizontal>
                <ScrollHorizontal>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                  <CategoryCard>span</CategoryCard>
                </ScrollHorizontal>
              </ScrollHorizontal>
            </InputContainer>
          </>
        )}

        {moddalPage === 'order-list' ? (
          <>
            <FloatButton color="#FFB573" bottom="7.3em" right="2em">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8334 4.66699H4.66671C4.04787 4.66699 3.45438 4.91282 3.01679 5.35041C2.57921 5.78799 2.33337 6.38149 2.33337 7.00033V23.3337C2.33337 23.9525 2.57921 24.546 3.01679 24.9836C3.45438 25.4212 4.04787 25.667 4.66671 25.667H21C21.6189 25.667 22.2124 25.4212 22.65 24.9836C23.0875 24.546 23.3334 23.9525 23.3334 23.3337V15.167"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.5834 2.91628C22.0475 2.45215 22.677 2.19141 23.3334 2.19141C23.9898 2.19141 24.6192 2.45215 25.0834 2.91628C25.5475 3.38041 25.8083 4.0099 25.8083 4.66628C25.8083 5.32266 25.5475 5.95215 25.0834 6.41628L14 17.4996L9.33337 18.6663L10.5 13.9996L21.5834 2.91628Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </FloatButton>
            <FloatButton
              color="#08AF24"
              bottom="2em"
              right="2em"
              onClick={() => setModalPage('')}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6.66602V23.3327"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66663 15H23.3333"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </FloatButton>
          </>
        ) : (
          <></>
        )}
      </LargeModal>
    </>
  );
};

export default injectIntl(BlankPage);
