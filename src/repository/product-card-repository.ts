import {ProductType} from "../types";
import anchor from '../assets/products/anchor.jpg'
import rigging from '../assets/products/rigging.jpg'
import screws from '../assets/products/screws.jpg'
import bolts from '../assets/products/bolts.jpg'
import dyubel from '../assets/products/dyubel.jpg'
import vints from '../assets/products/vints.jpg'
import gayki from '../assets/products/gayki.jpg'
import zaklepki from '../assets/products/zaklepki.jpg'
import noCorrosian from '../assets/products/no-corrosian.jpg'
import perf from '../assets/products/perf.jpg'
import homuts from '../assets/products/homuts.jpg'
import washers from '../assets/products/washers.jpg'
import {menuTitleEnum} from "../constants";
import {productionMenu} from "./catalog-menu-repository";

export const products: ProductType[] = [
    {
        id: 1,
        title: menuTitleEnum.anchor,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.anchor)[0].link,
        img: anchor,
    },
    {
        id: 2,
        title: menuTitleEnum.bolts,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.bolts)[0].link,
        img: bolts,
    },
    {
        id: 4,
        title: menuTitleEnum.dowels,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.dowels)[0].link,
        img: dyubel,
    }, {
        id: 5,
        title: menuTitleEnum.perforation,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.perforation)[0].link,
        img: perf,
    }, {
        id: 6,
        title: menuTitleEnum.rigging,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.rigging)[0].link,
        img: rigging,
    }, {
        id: 7,
        title: menuTitleEnum.screws,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.screws)[0].link,
        img:  vints,
    },{
        id: 8,
        title: menuTitleEnum.nuts,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.nuts)[0].link,
        img: gayki,
    },{
        id: 9,
        title: menuTitleEnum.rivets,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.rivets)[0].link,
        img: zaklepki,
    },{
        id: 10,
        title: menuTitleEnum.selfTappingScrews,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.selfTappingScrews)[0].link,
        img: screws,
    },{
        id: 11,
        title: menuTitleEnum.collars,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.collars)[0].link,
        img: homuts,
    },{
        id: 12,
        title: menuTitleEnum.washers,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.washers)[0].link,
        img: washers,
    },{
        id: 13,
        title: menuTitleEnum.corrosionProof,
        link: productionMenu.filter((menu) => menu.title === menuTitleEnum.corrosionProof)[0].link,
        img: noCorrosian,
    }
];
