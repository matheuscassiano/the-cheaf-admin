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
  MidButton,
} from '../../../styled-components';
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
  ClientCardContainer,
  ClientCard,
} from './styles';

const Historic = () => {
  const [largeModalActive, setLargeModalActive] = useState(false);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <ClientCardContainer>
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </ClientCardContainer>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Header>
            <Search placeholder="Pesquisar por descrição do pedido" />
            <div>
              <MidButton color="#08AF24">Adicionar cliente</MidButton>
              <HeaderButton>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.3337 25.0001C32.1118 25.5028 32.0456 26.0604 32.1436 26.6011C32.2417 27.1417 32.4994 27.6406 32.8837 28.0334L32.9837 28.1334C33.2936 28.443 33.5394 28.8106 33.7072 29.2153C33.8749 29.6199 33.9613 30.0537 33.9613 30.4917C33.9613 30.9298 33.8749 31.3636 33.7072 31.7682C33.5394 32.1729 33.2936 32.5405 32.9837 32.8501C32.6741 33.16 32.3065 33.4059 31.9018 33.5736C31.4971 33.7414 31.0634 33.8277 30.6253 33.8277C30.1873 33.8277 29.7535 33.7414 29.3489 33.5736C28.9442 33.4059 28.5766 33.16 28.267 32.8501L28.167 32.7501C27.7742 32.3658 27.2753 32.1081 26.7346 32.0101C26.194 31.912 25.6363 31.9782 25.1337 32.2001C24.6407 32.4113 24.2203 32.7622 23.9242 33.2093C23.628 33.6565 23.4691 34.1804 23.467 34.7167V35.0001C23.467 35.8841 23.1158 36.732 22.4907 37.3571C21.8656 37.9822 21.0177 38.3334 20.1337 38.3334C19.2496 38.3334 18.4018 37.9822 17.7766 37.3571C17.1515 36.732 16.8003 35.8841 16.8003 35.0001V34.8501C16.7874 34.2984 16.6089 33.7634 16.2878 33.3146C15.9668 32.8658 15.5182 32.5239 15.0003 32.3334C14.4976 32.1116 13.94 32.0454 13.3993 32.1434C12.8587 32.2414 12.3598 32.4992 11.967 32.8834L11.867 32.9834C11.5574 33.2933 11.1898 33.5392 10.7851 33.7069C10.3805 33.8747 9.94671 33.961 9.50866 33.961C9.07061 33.961 8.63685 33.8747 8.23219 33.7069C7.82753 33.5392 7.4599 33.2933 7.15032 32.9834C6.8404 32.6738 6.59454 32.3062 6.42679 31.9015C6.25904 31.4969 6.1727 31.0631 6.1727 30.6251C6.1727 30.187 6.25904 29.7533 6.42679 29.3486C6.59454 28.944 6.8404 28.5763 7.15032 28.2667L7.25032 28.1667C7.63455 27.7739 7.8923 27.2751 7.99033 26.7344C8.08836 26.1937 8.02218 25.6361 7.80032 25.1334C7.58905 24.6405 7.23825 24.2201 6.7911 23.9239C6.34395 23.6278 5.81997 23.4689 5.28366 23.4667H5.00033C4.11627 23.4667 3.26842 23.1156 2.6433 22.4904C2.01818 21.8653 1.66699 21.0175 1.66699 20.1334C1.66699 19.2494 2.01818 18.4015 2.6433 17.7764C3.26842 17.1513 4.11627 16.8001 5.00033 16.8001H5.15033C5.70198 16.7872 6.237 16.6086 6.68582 16.2876C7.13465 15.9666 7.47652 15.518 7.66699 15.0001C7.88885 14.4974 7.95503 13.9398 7.857 13.3991C7.75897 12.8584 7.50122 12.3595 7.11699 11.9667L7.01699 11.8667C6.70707 11.5572 6.46121 11.1895 6.29346 10.7849C6.12571 10.3802 6.03937 9.94647 6.03937 9.50841C6.03937 9.07036 6.12571 8.63661 6.29346 8.23195C6.46121 7.82729 6.70707 7.45966 7.01699 7.15008C7.32657 6.84016 7.6942 6.5943 8.09886 6.42655C8.50352 6.2588 8.93727 6.17246 9.37532 6.17246C9.81338 6.17246 10.2471 6.2588 10.6518 6.42655C11.0565 6.5943 11.4241 6.84016 11.7337 7.15008L11.8337 7.25008C12.2265 7.63431 12.7254 7.89206 13.266 7.99009C13.8067 8.08812 14.3643 8.02194 14.867 7.80008H15.0003C15.4933 7.58881 15.9137 7.23801 16.2098 6.79086C16.5059 6.34371 16.6649 5.81973 16.667 5.28341V5.00008C16.667 4.11603 17.0182 3.26818 17.6433 2.64306C18.2684 2.01794 19.1163 1.66675 20.0003 1.66675C20.8844 1.66675 21.7322 2.01794 22.3573 2.64306C22.9825 3.26818 23.3337 4.11603 23.3337 5.00008V5.15008C23.3358 5.68639 23.4947 6.21037 23.7908 6.65752C24.087 7.10467 24.5074 7.45548 25.0003 7.66675C25.503 7.88861 26.0606 7.95479 26.6013 7.85675C27.142 7.75872 27.6409 7.50098 28.0337 7.11675L28.1337 7.01675C28.4432 6.70683 28.8109 6.46096 29.2155 6.29322C29.6202 6.12547 30.0539 6.03913 30.492 6.03913C30.93 6.03913 31.3638 6.12547 31.7685 6.29322C32.1731 6.46096 32.5407 6.70683 32.8503 7.01675C33.1602 7.32632 33.4061 7.69395 33.5739 8.09861C33.7416 8.50327 33.8279 8.93703 33.8279 9.37508C33.8279 9.81313 33.7416 10.2469 33.5739 10.6515C33.4061 11.0562 33.1602 11.4238 32.8503 11.7334L32.7503 11.8334C32.3661 12.2262 32.1083 12.7251 32.0103 13.2658C31.9123 13.8064 31.9785 14.3641 32.2003 14.8667V15.0001C32.4116 15.493 32.7624 15.9134 33.2095 16.2096C33.6567 16.5057 34.1807 16.6646 34.717 16.6667H35.0003C35.8844 16.6667 36.7322 17.0179 37.3573 17.6431C37.9825 18.2682 38.3337 19.116 38.3337 20.0001C38.3337 20.8841 37.9825 21.732 37.3573 22.3571C36.7322 22.9822 35.8844 23.3334 35.0003 23.3334H34.8503C34.314 23.3356 33.79 23.4945 33.3429 23.7906C32.8957 24.0867 32.5449 24.5071 32.3337 25.0001V25.0001Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </HeaderButton>
            </div>
          </Header>
        </Colxx>
      </Row>
      <br />
      <Row>
        <Colxx lg="12" className="mb-4">
          <Table>
            <TR>
              <TH>Nome</TH>
              <TH>Celular</TH>
              <TH>Email</TH>
              <TH>Quantidade</TH>
            </TR>
            <TR>
              <TD>Pedro Herrique</TD>
              <TD>(82) 9 9741-9452</TD>
              <TD>pedroherrique@gmail.com</TD>
              <TD>10</TD>
            </TR>
            <TR>
              <TD>Pedro Herrique</TD>
              <TD>(82) 9 9741-9452</TD>
              <TD>pedroherrique@gmail.com</TD>
              <TD>10</TD>
            </TR>
            <TR>
              <TD>Pedro Herrique</TD>
              <TD>(82) 9 9741-9452</TD>
              <TD>pedroherrique@gmail.com</TD>
              <TD>10</TD>
            </TR>
            <TR>
              <TD>Pedro Herrique</TD>
              <TD>(82) 9 9741-9452</TD>
              <TD>pedroherrique@gmail.com</TD>
              <TD>10</TD>
            </TR>
            <TR>
              <TD>Pedro Herrique</TD>
              <TD>(82) 9 9741-9452</TD>
              <TD>pedroherrique@gmail.com</TD>
              <TD>10</TD>
            </TR>
            <TR>
              <TD>Pedro Herrique</TD>
              <TD>(82) 9 9741-9452</TD>
              <TD>pedroherrique@gmail.com</TD>
              <TD>10</TD>
            </TR>
            <TR>
              <TD>Pedro Herrique</TD>
              <TD>(82) 9 9741-9452</TD>
              <TD>pedroherrique@gmail.com</TD>
              <TD>10</TD>
            </TR>
          </Table>
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
