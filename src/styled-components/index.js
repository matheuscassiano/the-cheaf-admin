/* eslint-disable no-bitwise */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

function hexToShadow(hex) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')}, 0.5)`;
  }
  throw new Error('Bad Hex');
}

export const OrdersContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  margin: 1em 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  border-radius: 1.3em;
  border: none;
  box-shadow: 0px 0px 3px rgba(45, 80, 120, 0.3);
`;

export const InputLineContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: calc(50% - 0.5em);
    margin-top: 0;
  }
`;

export const Label = styled.span`
  padding-left: 1em;
`;

export const OrderList = styled.section`
  margin: 0.5em 0;
`;

export const OrderContent = styled.div`
  font-size: 1rem;
  padding-bottom: 0.5em;
  display: flex;
  justify-content: space-between;

  b {
    font-size: 1.2rem !important;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8em 1em;
  border-radius: 1.3em;
  border: none;
  background-color: ${(props) => props.color};
  color: white;
  font-weight: bold;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;
export const MinButton = styled.button`
  border: 0;
  padding: 0.8em;
  margin: 0 1em;
  border-radius: 0.8em;
  background-color: ${(props) => props.color};
`;

export const MidButton = styled(Button)`
  width: 10em;
  margin: 0 0.5em;
`;

export const TableContainer = styled.div`
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 0 2em;
  padding-top: 3.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
`;

export const TR = styled.tr`
  border-radius: 5px;
  margin-bottom: 5em;
  background-color: white;
  box-shadow: 0px 0px 2px rgba(45, 80, 120, 0.3);
`;
export const TH = styled.th`
  padding: 1rem;
  text-align: left;
`;

export const TD = styled.td`
  padding: 1rem;
`;

export const Price = styled.span`
  margin: 0;
  padding: 0;
  color: #608f5f;
  font-weight: 700;
`;

export const FloatButton = styled.button`
  border: 0;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  background-color: ${(props) => props.color};
  box-shadow: 0 0 10px ${(props) => hexToShadow(props.color)};
`;

export const ModalSearch = styled(Input)`
  width: calc(100% - 7em);
  margin: 2.5em 2em 1em;
`;

export const ModalFooter = styled.div`
  height: 4.2em;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 2px rgba(45, 80, 120, 0.3);
`;

export const CardList = styled.div`
  height: 480px;
  padding: 1em 2em;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const MenuListItem = styled.div`
  width: 100%;
  padding: 0.7em 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 2px rgba(45, 80, 120, 0.3);
`;

export const ItemImage = styled.img`
  width: 2.8em;
  height: 2.8em;
  object-fit: cover;
  border-radius: 100%;
  margin-right: 1em;
`;

export const ItemImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Progress = styled.progress`
  width: 100%;
  height: 0.6em;
  appearance: none;

  ::-webkit-progress-value {
    background-color: #08af24;
    border-radius: 2em;
  }

  ::-webkit-progress-bar {
    border-radius: 2px;
    background-color: #d0d5da;
  }
`;

export const CashStatus = styled.header`
  padding: 1em 1.5em 0.25em;
  color: white;
  font-weight: bold;
  background-color: ${({ color }) => color};
`;

export const SpaceBeetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
  }
`;
