import { QuestionBase } from './question';

export class DropdownQuestion extends QuestionBase<String> {
    // we used the text-box for string
    public controlType = "textbox";
    //  so the value we used string
    public type: String;
    
    // know we used the constructor
    constructor(options: {}= {}){
        // here we pass the empty
        super(options);
        // this mean any type of text-boox like email and simple text box
        this.type = options['type'] || '';
    }
}