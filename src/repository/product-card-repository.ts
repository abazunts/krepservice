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

export const products: ProductType[] = [
    {
        id: 1,
        title: 'Анкеры',
        link: '/anchor',
        img: anchor,
    },
    {
        id: 2,
        title: 'Такелаж',
        link: '/bolt',
        img: rigging,
    },
    {
        id: 4,
        title: 'Саморезы',
        link: '/bolt',
        img: screws,
    }, {
        id: 5,
        title: 'Болты',
        link: '/bolt',
        img: bolts,
    }, {
        id: 6,
        title: 'Дюбели',
        link: '/bolt',
        img: dyubel,
    }, {
        id: 7,
        title: 'Винты',
        link: '/bolt',
        img: vints,
    },{
        id: 8,
        title: 'Гайки',
        link: '/bolt',
        img: gayki,
    },{
        id: 9,
        title: 'Заклепки',
        link: '/bolt',
        img: zaklepki,
    },{
        id: 10,
        title: 'Нержавеющий крепеж',
        link: '/bolt',
        img: noCorrosian,
    },{
        id: 11,
        title: 'Перфорация',
        link: '/bolt',
        img: perf,
    },{
        id: 12,
        title: 'Хомуты',
        link: '/bolt',
        img: homuts,
    },
];
