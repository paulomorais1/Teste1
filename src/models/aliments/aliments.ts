// models/aliments/aliments.ts
import { INames } from "./names";

export interface IDonorAliments {
    userId: string;
    date: string;
    type: "Outros" | "Cesta Básica"; // Tipo específico
    items: DonorAlimentItem[] | number ;
}

export interface DonorAlimentItem {
    nameItems: INames;
    quantity: number;
}
