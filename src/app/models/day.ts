export class Day {

    DateFull: Date
    Day: string
    Date: number
    Month: number
    Year: number
    Format: string
    CurrentMonth: boolean
    
    deserialize(input: any): this {
        return Object.assign(this, input)
    }

}
