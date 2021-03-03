import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx } from '../../../components/common/CustomBootstrap';
import { Table, TD, TH, TR } from '../../../styled-components';

const BlankPage = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12" />
      </Row>
      <br />
      <Row>
        <Colxx lg="12" className="mb-4">
          <Table>
            <TR>
              <TH>ID</TH>
              <TH>Aberto em</TH>
              <TH>Saldo Inicial</TH>
              <TH>Saldo Final</TH>
              <TH>Usuário</TH>
              <TH>Status do caixa</TH>
              <TH>Observações</TH>
              <TH />
            </TR>
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
            <TR>
              <TD>123</TD>
              <TD>12/02/2020 12:00:00</TD>
              <TD>R$ 0.00</TD>
              <TD>R$ 0.00</TD>
              <TD>João Pedro</TD>
              <TD>Fechado</TD>
              <TD>Aberto às 12:18 por Joãoo Pedro</TD>
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
        </Colxx>
      </Row>
    </>
  );
};

export default injectIntl(BlankPage);
