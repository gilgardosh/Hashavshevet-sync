export interface PostTransaction {
    Branch:
        $ref: "#/components/schemas/Branch"
    CostCode:
        $ref: "#/components/schemas/CostCode"
    CredName:
        $ref: "#/components/schemas/CredName"
    CurrencyCode:
        $ref: "#/components/schemas/CurrencyCode"
    DatF3:
        $ref: "#/components/schemas/DatF3"
    DebName:
        $ref: "#/components/schemas/DebName"
    Description?:
        $ref: "#/components/schemas/Description"
    Det2?:
        $ref: "#/components/schemas/Det2"
    Details?:
        $ref: "#/components/schemas/Details"
    DueDate?:
        $ref: "#/components/schemas/DueDate"
    Osek874?:
        $ref: "#/components/schemas/Osek874"
    Quant?:
        $ref: "#/components/schemas/Quant"
    Ref2?:
        $ref: "#/components/schemas/Ref2"
    Ref3?:
        $ref: "#/components/schemas/Ref3"
    Reference?:
        $ref: "#/components/schemas/Reference"
    SuF:
        $ref: "#/components/schemas/SuF"
    SuFDlr?:
        $ref: "#/components/schemas/SuFDlr"
    TransCredID:
        $ref: "#/components/schemas/TransCredID"
    TransDebID:
        $ref: "#/components/schemas/TransDebID"
    TransType?:
        $ref: "#/components/schemas/TransType"
    ValueDate?: string;
    moves?: Move[];
}

interface Move {
    AccountKey: string;
    DebitCredit: string; //enum "0" or "1"
    SuF: number;
    SuFDlr?: number;
}