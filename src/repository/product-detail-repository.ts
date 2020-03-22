import anchor from "../assets/products/anchor.jpg";
import rigging from "../assets/products/rigging.jpg";
import {DetailProductType} from "../types";
import screws from "../assets/products/screws.jpg";
import bolts from "../assets/products/bolts.jpg";
import dyubel from "../assets/products/dyubel.jpg";
import vints from "../assets/products/vints.jpg";
import gayki from "../assets/products/gayki.jpg";
import zaklepki from "../assets/products/zaklepki.jpg";
import noCorrosian from "../assets/products/no-corrosian.jpg";
import perf from "../assets/products/perf.jpg";
import homuts from "../assets/products/homuts.jpg";

export const detail: DetailProductType = {
    anchor: [
        {
            id: 1,
            title: 'Анкеры',
            img: anchor,
        },
        {
            id: 2,
            title: 'Такелаж',
            img: rigging,
        },
        {
            id: 4,
            title: 'Саморезы',
            img: screws,
        }, {
            id: 5,
            title: 'Болты',
            img: bolts,
        }, {
            id: 6,
            title: 'Дюбели',
            img: dyubel,
        }, {
            id: 7,
            title: 'Винты',
            img: vints,
        },{
            id: 8,
            title: 'Гайки',
            img: gayki,
        },{
            id: 9,
            title: 'Заклепки',
            img: zaklepki,
        },{
            id: 10,
            title: 'Нержавеющий крепеж',
            img: noCorrosian,
        },{
            id: 11,
            title: 'Перфорация',
            img: perf,
        },{
            id: 12,
            title: 'Хомуты',
            img: homuts,
        },
    ]
};

