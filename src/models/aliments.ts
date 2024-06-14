import { INames } from "./aliments/names";

export interface IDonorAliments {
    type: string;
    items: DonorAlimentItem[];
}

export interface DonorAlimentItem {
    nameItems: INames;
    quantity: number;
    foodTypes: "single" | "others";
}
