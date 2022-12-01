class ParkingLot {
    vno; hours; billing;

    input() {
        this.vno = prompt('Enter vehicle number')
        this.hours = parseInt(prompt('for how many hour vehicle is parked '))
    }
    calculate() {
        if (this.hours == 1) {
            this.billing = this.hours * 3;
        }
        else {

            this.billing = 3 + (this.hours - 1) * 1.5;
        }
    }

    display() {
        document.write("Vehicle num-" + this.vno + "<br>");
        document.write("for how many hour vehicle is parked" + this.hours + "<br>");
        document.write("Bill amount:" + this.billing + "<br>");
    }
}
let parking = new ParkingLot()
parking.input()
parking.calculate()
parking.display()