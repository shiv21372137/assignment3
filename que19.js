class ElectricBill {
    n;
    units;
    bill;

    input() {
        this.n = prompt("Enter name of customer");
        this.units = parseInt(prompt("Enter the total units "));
    }
    calculate() {
        if (this.units <= 100)
         {
            this.bill = this.units * 2
        }
        else if (this.units > 100 && this.units <= 300)
         {
            this.bill = this.units * 3
        }
        else
         {
            this.bill = (this.units * 5) + 2.5 / 100
        }
    }
    print() {
        document.write("Name of the customer-"+ this.n+ "<br>");
        document.write("Number of units -"+ this.units+ "<br>");
        document.write("Bill Amt-"+ this.bill)
    }
}
let totalBill = new ElectricBill();
totalBill.input();
totalBill.calculate();
totalBill.print();