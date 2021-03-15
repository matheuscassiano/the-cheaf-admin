import { adminRoot } from './defaultValues';
// import { UserRole } from "../helpers/authHelper"

const data = [
  {
    id: 'gogo',
    icon: 'iconsminds-air-balloon-1',
    label: 'menu.gogo',
    to: `${adminRoot}/gogo`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.start',
        to: `${adminRoot}/gogo/start`,
      },
    ],
  },
  {
    id: 'secondmenu',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.second-menu',
    to: `${adminRoot}/second-menu`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.second',
        to: `${adminRoot}/second-menu/second`,
      },
    ],
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: 'menu.blank-page',
    to: `${adminRoot}/blank-page`,
  },
  {
    id: 'mesas',
    icon: 'iconsminds-receipt',
    label: 'Mesas',
    to: `${adminRoot}/pedidos`,
  },
  {
    id: 'historico',
    icon: 'iconsminds-receipt',
    label: 'Historico de Caixa',
    to: `${adminRoot}/historico`,
  },
  {
    id: 'clientes',
    icon: 'iconsminds-receipt',
    label: 'Clientes',
    to: `${adminRoot}/clientes`,
  },
  {
    id: 'caixa',
    icon: 'iconsminds-receipt',
    label: 'Caixa',
    to: `${adminRoot}/caixa`,
  },
];
export default data;
