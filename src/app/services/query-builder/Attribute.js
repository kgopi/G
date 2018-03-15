import Expression from "./Expression";
import * as Operator from "./Operator";

export default class Attribute{

    name;

    constructor(name){
        this.name = name;
    }

    equals(value){
        return new Expression(this, Operator.EQUALS, value);
    }

    notEquals(value){
        return new Expression(this, Operator.NOT_EQUALS, value);
    }

    in(value){
        return new Expression(this, Operator.IN, value);
    }

    greaterThan(value){
        return new Expression(this, Operator.GREATER_THAN, value);
    }

    lessThan(value){
        return new Expression(this, Operator.LESS_THAN, value);
    }

    toString(){
        return this.name;
    }

}