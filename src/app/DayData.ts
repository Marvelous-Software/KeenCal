export class DayData {

    // properties
    private day:number
    private code:string
    private section:string[]
    private days:string[]
    private start:string
    private end:string


    // accessors 
    set set_title(title:string) {

        this.title = title;
    }
    get get_title() {
    
       return this.title;
    }

    set set_code(code:string) {

        this.code = code;
    }
    get get_code() {
    
       return this.code;
    }

    set add_section(section:string) {

        this.section.push(section);
    }
    get get_sections() {
    
       return this.section;
    }

    set add_days(day:string) {

        this.days.push(day);
    }
    get get_days() {
    
       return this.days;
    }

    set set_start(start:string) {

        this.start = start;
    }
    get get_start() {
    
       return this.start;
    }

    set set_end(end:string) {

        this.end = end;
    }
    get get_end() {
    
       return this.end;
    }

    // constructor
    constructor (title:string, code:string) {

        this.title = title;
        this.code = code;
        this.days = [];

    }

    // methods
    to_string() {

        return this.code + " " + this.title + " - " + this.days;

    }

}