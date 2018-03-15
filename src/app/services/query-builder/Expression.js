import Attribute from "./Attribute";
import * as Operator from "./Operator";

export default class Expression{

    operand;
    operator;
    value;
    isEnclosed = false;

    constructor(operand, operator, value){
        this.operand = operand;
        this.operator = operator;
        this.value = value;
    }

    OR(subsequentExpression){
        return new Expression(this, Operator.OR, subsequentExpression);
    }

    AND(subsequentExpression){
        return new Expression(this, Operator.AND, subsequentExpression);
    }

    encloseIt(){
        this.isEnclosed = true;
        return this;
    }

    toString(){
        let expression = [this.operand.toString() + this.operator + this.value.toString()];
        if(this.isEnclosed){
            expression.unshift('(');
            expression.push(')')
        }
        return expression.join('');
    }

}