import { RowID, RowElement } from './interface.ts';
// declare module "CRUD" {
export declare function insertRow(RowElement) => number;
export declare function deleteRow(RowID) => void;
export declare function updateRow(RowElement, RowID) => RowID;
// }
