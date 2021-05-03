export class Day {

    DateFull: Date
    Day: string
    Date: number
    //Month: number
    //Year: number
    Format: string
    CurrentMonth: boolean
    

    constructor(public Month: number, public Year: number) {
    }

    deserialize(input: any): this {
        return Object.assign(this, input)
    }

    get Key(){
        return this.Year + (this.Month + 1).toString().padStart(2, '0') + (this.Date + 1).toString().padStart(2, '0')
    }

}
