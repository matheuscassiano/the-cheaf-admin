import { adminRoot } from './defaultValues';
// import { UserRole } from "../helpers/authHelper"

const data = [
  // {
  //   id: 'gogo',
  //   icon: 'iconsminds-air-balloon-1',
  //   label: 'menu.gogo',
  //   to: `${adminRoot}/gogo`,
  //   // roles: [UserRole.Admin, UserRole.Editor],
  //   subs: [
  //     {
  //       icon: 'simple-icon-paper-plane',
  //       label: 'menu.start',
  //       to: `${adminRoot}/gogo/start`,
  //     },
  //   ],
  // },
  {
    id: 'mesas',
    icon: 'iconsminds-record-2',
    label: 'Mesas',
    to: `${adminRoot}/pedidos`,
  },
  {
    id: 'historico',
    icon: 'iconsminds-box-with-folders',
    label: 'Historico de Caixa',
    to: `${adminRoot}/historico`,
  },
  {
    id: 'clientes',
    icon: 'iconsminds-user',
    label: 'Clientes',
    to: `${adminRoot}/clientes`,
  },
  {
    id: 'caixa',
    icon: 'iconsminds-cash-register-2',
    label: 'Caixa',
    to: `${adminRoot}/caixa`,
  },
];
export default data;
