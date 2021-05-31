export interface TitleInterface {
    title: string,
    titleType: TitleTypeEnum,
    darkMode?: boolean
}

export enum TitleTypeEnum{
    H1,H2,H3,H4,H5,H6
}