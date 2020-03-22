export type ProductType = {
    id: number
    title: string
    link: string
    img: string
};

export type DetailType = {
    id: number
    title: string
    img: string
};

export type ProductionMenuType = {
    title: string
    link: string
};

export type DetailProductType = {
    [key: string]: DetailType[]
}






