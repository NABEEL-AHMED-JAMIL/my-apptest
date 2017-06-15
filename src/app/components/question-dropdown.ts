import { QuestionBase } from './question';

export class TextboxQuestion extends QuestionBase<String> {
    // we used the drop-down 
   public controlType = "dropdown";
   public options: {key: String, value: String}[] = [];
    
    // know we used the constructor
    constructor(options: {}= {}){
        // here we pass the empty
        super(options);
        // this mean any type of text-boox like email and simple text box
        this.options = options['options'] || [];
    }
}