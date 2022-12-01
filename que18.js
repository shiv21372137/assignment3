class BookFair
{
    Bookname;price;
    input(){
        this.Bookname=prompt("Enter the name of book")
        this.price=parseInt(prompt("Enter book price"))
    }
    calculate(){
      
        if(this.price <=1000){
          this.d= (2/100)*this.price;
        }
        else if(this.price<=3000)
        this.d =(10/100)*this.price
        else {
            this.d=(15/100)*this.price;
        }
    }
    display(){
        document.write("Book name: "+this.Bookname+"<br>")
        document.write("Price of book: "+this.price+"<br>")
        document.write(" discount:"+this.d+"<br>")
        document.write(" final price:"+(this.price-this.d))
    }

}

let b= new BookFair();
b.input()
b.calculate()
b.display()