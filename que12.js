// define class book with the following specificications

class book {
    bookNo; bookTitle; price;

    Input() {
        this.bookNo = prompt("enter the book no");
        this.bookTitle = prompt("enter the book title");
        this.price = parseInt(prompt("enter the price"))
    }

    totalCost(n) {
        let tcost;
        tcost = this.price * this.n
        document.write("total cost" + tcost)
    }

    purchase(){
        this.n=parseInt(prompt("enter the no, of copies to purchase"))
    this.totalCost(this.n)
    }
}
let ob=new book
ob.Input();
ob.purchase();