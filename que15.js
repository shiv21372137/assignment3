class telephone {
    prv;
    pre;
    call;
    amt;
    total;
    Input() {
        this.prv = parseInt(prompt("enter the previous meter reading"));
        this.pre = parseInt(prompt("enter the present meter reading"));
        this.name = prompt("enter the name");

    }
    cal() {
        this.call = this.pre - this.prv;
        if (this.call <= 100)
            this.amt = 0
        else if (this.call > 100 && this.call <= 200)
            this.amt = 0 * 100(this.call - 100) * 0.90;
        else if (this.call > 200 && this.call <= 400)
            this.amt = 0 * 100 + 100 * 0.90 + (this.call - 200) * 0.80;
        else
            this.amt = 0 * 100 + 100 * 0.90 + 200 * 0.80(this.call - 400) * 0.70;
        this.total = this.amt + 180;

    }
    display() {
        document.write("name:" + this.name + "<br>" + "call made:" + this.call + "<br>" + "amount:" + this.amt + "<br>" + "total amount" + this.total)
    }

}
let telephone = new telephone()
telephone.input()
telephone.cal()
telephone.display();