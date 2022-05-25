export default class Condition {
    constructor(condition: string | number) {
        this.condition = condition;
    }
    condition: string | number;
    operator: ">"|"<"|"="|"!="|">="|"<="
    requirement: string | number
}