import { Vendor } from "../vendor.class";
import { Poline } from "./poline.class";

export class Po {
    vendor: Vendor = null!;
    polines: Poline[] = [];
    poTotal: number = 0;
}