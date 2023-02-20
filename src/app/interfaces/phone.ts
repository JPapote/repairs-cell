import { FixedPhone } from "./fixedPhone"

export interface Phone {
    id?:number
    namePhone: string
    number?: number
    clientId: number
    fixedPhones?:FixedPhone
}