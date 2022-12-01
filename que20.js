class RailwtTicket {
    name;
    coach;
    mobno;
    amt;
    totalAmount;

    input() {
        this.name = prompt("Enter your name");
        this.coach = prompt("Enter the coach you wanna book");
        this.mobno = parseInt(prompt("Enter  mobile number"));
        this.amt = parseInt(prompt("Enter basic amount"));
    }
    update() {
        if (this.coach === "First AC") {
            this.totalAmount = this.amt + 700
        }
        else if (this.coach === "Second AC") {
            this.totalAmount = this.amt + 500
        }
        else if (this.coach === "Third AC") {
            this.totalAmount = this.amt + 250
        }
        else if (this.coach === "Sleeper") {
            this.totalAmount = this.amt
        }
    }
    display() {
        document.write("Name-"+ this.name+ "<br>")
        document.write("Coach-"+ this.coach+ "<br>")
        document.write("Mobile Number-"+ this.mobno+ "<br>")
        document.write("Total Amount-"+ this.totalAmount)
    }
}
let railway = new RailwtTicket();
railway.input();
railway.update();
railway.display();