/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Input } from '../../../styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const PageSearch = styled(Input)`
  width: 20em;
  border-radius: 20em;
  padding-left: 2em;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const OrderInfo = styled.aside`
  width: 100%;
  height: 100%;
  padding: 2em;
  overflow-y: auto;
  border-right: 1px solid lightgray;
`;

export const SmallOrderInfo = styled(OrderInfo)`
  padding: 0;
  position: relative;
`;

export const TablesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const TablesItem = styled.div`
  width: 4.5em;
  height: 4.5em;
  margin: 1em;
  align-self: center;
  justify-self: center;
  border-radius: 100%;
  background-color: #08af24;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25em 0;
`;

export const OrderDetails = styled.div`
  height: 33em;
  overflow-y: auto;
  padding: 0 2em;
  border-bottom: 0.3px solid #979797;
`;

export const SmallOrderHeader = styled.header`
  padding: 2em 0 1em 2em;
`;

export const SmallOrderFooter = styled.footer`
  padding: 2em 2em 0;
`;

export const FooterButtonContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
`;

export const SmallFooterButtonContainer = styled(FooterButtonContainer)`
  width: 87%;
  justify-content: space-between;

  button {
    margin: 0;
    margin-bottom: 1.5em;
  }
`;

export const FooterButton = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  background-color: white;
  margin: 1.5em 1em;

  svg {
    margin-right: 0.8em;
  }
`;
