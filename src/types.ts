import {menuTitleEnum} from "./constants";

export type ProductType = {
    id: number
    title: menuTitleEnum
    link: string
    img: string
};

export type DetailType = {
    id: number
    title: string
    img: string
};

export type ProductionMenuType = {
    title: menuTitleEnum
    link: string
};

export type DetailProductType = {
    [key: string]: DetailType[]
}

export type AboutCompanyType = {
    [key: string]: string
}






