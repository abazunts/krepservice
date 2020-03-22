import {ProductionMenuType} from "../types";
import {menuTitleEnum} from "../constants";

export const productionMenu: ProductionMenuType[] = [
    {title: menuTitleEnum.anchor, link: '/anchor'},
    {title: menuTitleEnum.bolts, link: '/bolts'},
    {title: menuTitleEnum.dowels, link: '/dowels'},
    {title: menuTitleEnum.perforation, link: '/perforation'},
    {title: menuTitleEnum.rigging, link: '/rigging'},
    {title: menuTitleEnum.screws, link: '/screws'},
    {title: menuTitleEnum.nuts, link: '/nuts'},
    {title: menuTitleEnum.rivets, link: '/rivets'},
    {title: menuTitleEnum.selfTappingScrews, link: '/self-tapping-screws'},
    {title: menuTitleEnum.collars, link: '/collars'},
    {title: menuTitleEnum.washers, link: '/washers'},
    {title: menuTitleEnum.corrosionProof, link: '/corrosion-proof'},
];

export const mainMenu = [
    {title: 'Главная', link: ''},
    {title: 'О компании', link: '/about'},
    {title: 'Контакты', link: '/contacts'}
];
