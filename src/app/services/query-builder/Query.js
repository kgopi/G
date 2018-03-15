import Expression from "./Expression";

export default class Query{

    expression;

    constructor(expression){
        this.expression = expression;
    }

    toString(){
        return "(" + this.expression.toString() +  ")";
    }

}