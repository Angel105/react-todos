class TodoModel {
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;

    constructor(rowNumer: number, rowDescription: string, rowAssigned: string) {
        this.rowNumber = rowNumer;
        this.rowDescription = rowDescription;
        this.rowAssigned = rowAssigned;
    }
}