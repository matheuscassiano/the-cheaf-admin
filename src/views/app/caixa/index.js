/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx } from '../../../components/common/CustomBootstrap';
import {
  CashStatus,
  Progress,
  Table,
  TD,
  TH,
  TR,
} from '../../../styled-components';
import CashCard from '../../../styled-components/CashCard';
import LargeModal from '../../../styled-components/large-modal';
import {
  Header,
  HeaderButton,
  Search,
  LargeSide,
  SmallSide,
  ItemTitle,
  ProgressItem,
  Spend,
  ModalFooter,
  PageSplit,
  CashAside,
  CashAsideContent,
} from './styles';

const Historic = () => {
  const [largeModalActive, setLargeModalActive] = useState(false);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Header>
            <Search placeholder="Pesquisar por descrição do pedido" />
            <div>
              <HeaderButton>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22.4141C17.5228 22.4141 22 17.9369 22 12.4141C22 6.89121 17.5228 2.41406 12 2.41406C6.47715 2.41406 2 6.89121 2 12.4141C2 17.9369 6.47715 22.4141 12 22.4141Z"
                    stroke="#E4897B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9.41406L9 15.4141"
                    stroke="#E4897B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9.41406L15 15.4141"
                    stroke="#E4897B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Fechar caixa
              </HeaderButton>
              <HeaderButton>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0562 22C17.579 22 22.0562 17.5228 22.0562 12C22.0562 6.47715 17.579 2 12.0562 2C6.5333 2 2.05615 6.47715 2.05615 12C2.05615 17.5228 6.5333 22 12.0562 22Z"
                    stroke="#08AF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0562 8V16"
                    stroke="#08AF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.05615 12H16.0562"
                    stroke="#08AF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Entradas e Saidas
              </HeaderButton>
              <HeaderButton>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9V2H18V9"
                    stroke="#08AF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
                    stroke="#08AF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 14H6V22H18V14Z"
                    stroke="#08AF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Imprimir Movimentação
              </HeaderButton>
              <HeaderButton>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9V2H18V9"
                    stroke="#08AF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
                    stroke="#08AF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 14H6V22H18V14Z"
                    stroke="#08AF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Imprimir Resumo
              </HeaderButton>
            </div>
          </Header>
        </Colxx>
      </Row>
      <br />
      <Row>
        <Colxx lg="12" className="mb-4">
          <PageSplit>
            <Table>
              <TR>
                <TH>Data e Hora</TH>
                <TH>Descrição</TH>
                <TH>Entrada</TH>
                <TH>Saida</TH>
                <TH>Forma de Pagamento</TH>
                <TH />
              </TR>
              <TR>
                <TD>12/02/2020 12:00:00</TD>
                <TD>Pedido #4678 (Comanda 30)</TD>
                <TD>R$ 0.00</TD>
                <TD>R$ 0.00</TD>
                <TD>Cartão de Crédito</TD>
                <TD onClick={() => setLargeModalActive(true)}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0001 18.3337C14.6025 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 5.39795 14.6025 1.66699 10.0001 1.66699C5.39771 1.66699 1.66675 5.39795 1.66675 10.0003C1.66675 14.6027 5.39771 18.3337 10.0001 18.3337Z"
                      stroke="#4A90E2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 13.3333V10"
                      stroke="#4A90E2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 6.66699H10.0083"
                      stroke="#4A90E2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </TD>
              </TR>
            </Table>
            <div>
              <CashCard
                title="Balanço do dia"
                value="R$ 5000,00"
                color="#08AF24"
              />
              <CashCard
                title="Saldo pendente"
                value="R$ 2000,00"
                color="#FFB573"
              />
              <CashAside>
                <CashStatus color="#57C367;">
                  <h3>Caixa aberto</h3>
                </CashStatus>
                <CashAsideContent>
                  <h3>Entradas</h3>
                  <ProgressItem>
                    <ItemTitle>
                      Cartão de Crédito
                      <Spend>R$ 2.000,00</Spend>
                    </ItemTitle>
                    <Progress value="50" max="100" />
                  </ProgressItem>
                  <ProgressItem>
                    <ItemTitle>
                      Cartão de Crédito
                      <Spend>R$ 2.000,00</Spend>
                    </ItemTitle>
                    <Progress value="50" max="100" />
                  </ProgressItem>
                  <ProgressItem>
                    <ItemTitle>
                      Cartão de Crédito
                      <Spend>R$ 2.000,00</Spend>
                    </ItemTitle>
                    <Progress value="50" max="100" />
                  </ProgressItem>
                  <ProgressItem>
                    <ItemTitle>
                      Cartão de Crédito
                      <Spend>R$ 2.000,00</Spend>
                    </ItemTitle>
                    <Progress value="50" max="100" />
                  </ProgressItem>
                  <ProgressItem>
                    <ItemTitle>
                      Cartão de Crédito
                      <Spend>R$ 2.000,00</Spend>
                    </ItemTitle>
                    <Progress value="50" max="100" />
                  </ProgressItem>
                  <ProgressItem>
                    <ItemTitle>
                      Cartão de Crédito
                      <Spend>R$ 2.000,00</Spend>
                    </ItemTitle>
                    <Progress value="50" max="100" />
                  </ProgressItem>
                  <ProgressItem>
                    <ItemTitle>
                      Cartão de Crédito
                      <Spend>R$ 2.000,00</Spend>
                    </ItemTitle>
                    <Progress value="50" max="100" />
                    <ItemTitle>
                      <b>Total</b>
                      <Spend>R$ 2.000,00</Spend>
                    </ItemTitle>
                  </ProgressItem>
                  <br />
                  <h3>Saídas</h3>
                  <span>Não há registros de saída</span>
                </CashAsideContent>
              </CashAside>
            </div>
          </PageSplit>
        </Colxx>
      </Row>
      <LargeModal active={largeModalActive} setActive={setLargeModalActive}>
        <Info />
        <LogTable />
      </LargeModal>
    </>
  );
};

export default injectIntl(Historic);

const LogTable = () => (
  <LargeSide>
    <Table>
      <TR>
        <TH>Data e Hora</TH>
        <TH>Descrição</TH>
        <TH>Entrada</TH>
        <TH>Saída</TH>
        <TH>Forma de Pagamento</TH>
      </TR>
      <TR>
        <TD>
          12/02/2020 <br />
          12:00:00
        </TD>
        <TD>
          Pedido #4678 <br />
          (Comanda 30)
        </TD>
        <TD>R$ 30.00</TD>
        <TD>R$ 0.00</TD>
        <TD>Cartão de Crédito</TD>
        <TD>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 18.3337C14.6025 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 5.39795 14.6025 1.66699 10.0001 1.66699C5.39771 1.66699 1.66675 5.39795 1.66675 10.0003C1.66675 14.6027 5.39771 18.3337 10.0001 18.3337Z"
              stroke="#4A90E2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 13.3333V10"
              stroke="#4A90E2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 6.66699H10.0083"
              stroke="#4A90E2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </TD>
      </TR>
    </Table>
    <ModalFooter>
      <HeaderButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9V2H18V9"
            stroke="#08AF24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
            stroke="#08AF24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 14H6V22H18V14Z"
            stroke="#08AF24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        &nbsp;&nbsp;Imprimir movimentação
      </HeaderButton>
      <HeaderButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9V2H18V9"
            stroke="#08AF24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
            stroke="#08AF24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 14H6V22H18V14Z"
            stroke="#08AF24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        &nbsp;&nbsp;Imprimir resumo
      </HeaderButton>
    </ModalFooter>
  </LargeSide>
);

const Info = () => (
  <div>
    <CashStatus color="#de5753">
      <h3>Caixa Fechado</h3>
    </CashStatus>
    <SmallSide>
      <h3>Entradas</h3>
      <ProgressItem>
        <ItemTitle>
          Cartão de Crédito
          <Spend>R$ 2.000,00</Spend>
        </ItemTitle>
        <Progress value="50" max="100" />
      </ProgressItem>
      <ProgressItem>
        <ItemTitle>
          Cartão de Crédito
          <Spend>R$ 2.000,00</Spend>
        </ItemTitle>
        <Progress value="50" max="100" />
      </ProgressItem>
      <ProgressItem>
        <ItemTitle>
          Cartão de Crédito
          <Spend>R$ 2.000,00</Spend>
        </ItemTitle>
        <Progress value="50" max="100" />
      </ProgressItem>
      <ProgressItem>
        <ItemTitle>
          Cartão de Crédito
          <Spend>R$ 2.000,00</Spend>
        </ItemTitle>
        <Progress value="50" max="100" />
      </ProgressItem>
      <ProgressItem>
        <ItemTitle>
          Cartão de Crédito
          <Spend>R$ 2.000,00</Spend>
        </ItemTitle>
        <Progress value="50" max="100" />
      </ProgressItem>
      <ProgressItem>
        <ItemTitle>
          Cartão de Crédito
          <Spend>R$ 2.000,00</Spend>
        </ItemTitle>
        <Progress value="50" max="100" />
      </ProgressItem>
      <ProgressItem>
        <ItemTitle>
          Cartão de Crédito
          <Spend>R$ 2.000,00</Spend>
        </ItemTitle>
        <Progress value="50" max="100" />
        <ItemTitle>
          <b>Total</b>
          <Spend>R$ 2.000,00</Spend>
        </ItemTitle>
      </ProgressItem>
      <br />
      <h3>Saídas</h3>
      <span>Não há registros de saída</span>
    </SmallSide>
  </div>
);
