import { Phone } from "./phone"

export interface FixedPhone {
    reparation: string
    phoneId: number
    phone: Phone
    createdAt?:string

}