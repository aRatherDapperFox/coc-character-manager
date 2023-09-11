export class Skill {
    public half: number = 0;
    public fifth: number = 0;

    constructor(
        public name: string, public reg: number
    ) {
        this.half = Math.ceil(reg / 2);
        this.fifth = Math.ceil(reg / 5);
    }
}
