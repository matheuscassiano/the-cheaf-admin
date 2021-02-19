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
  TableContainer,
  Table,
  TR,
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
          <Button>Pagamento</Button>
        </OrderInfo>
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
              <TD>R$ 3.00</TD>
              <TD>R$ 9.00</TD>
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
              <TD>R$ 3.00</TD>
              <TD>R$ 9.00</TD>
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
              <TD>R$ 3.00</TD>
              <TD>R$ 9.00</TD>
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
              <TD>R$ 3.00</TD>
              <TD>R$ 9.00</TD>
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
              <TD>R$ 3.00</TD>
              <TD>R$ 9.00</TD>
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
              <TD>R$ 3.00</TD>
              <TD>R$ 9.00</TD>
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
              <TD>R$ 3.00</TD>
              <TD>R$ 9.00</TD>
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
              <TD>R$ 3.00</TD>
              <TD>R$ 9.00</TD>
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
              <TD>R$ 3.00</TD>
              <TD>R$ 9.00</TD>
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
      </LargeModal>
    </>
  );
};

export default injectIntl(BlankPage);
