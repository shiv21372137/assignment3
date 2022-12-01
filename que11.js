class Fruitjiuce {
    pcode = 1234;
    ptype = "xlx";
    psize = 123;
    pprice = 1234;
    flavour = "choco"
    Input() {

        let a = prompt("enter the product code :");
        this.pcode = parseInt(a)
        this.flavour = prompt("enter the flavour(orange/apple/etc):");
        this.ptype = prompt("enter the pack type(tetra pack/bottle/etc)")
        let b = prompt("enter the pack size(200ml/500ml/1ltr)")
        this.psize = parseInt(b)
        let c = prompt("enter the product price")
        this.pprice = parseInt(c);

    }
    discount() {
        this.pprice -= 10;
    }

    display() {
        document.write("product code:" + this.pcode + "<br>");
        document.write("flavour:" + this.flavour + "<br>");
        document.write("pack type" + this.ptype + "<br>");
        document.write("pack size" + this.psize + "<br>");
        document.write("product price" + this.pprice + "<br>")
        document.write("discount:" + this.pprice + "<br>")
    }


}
let Fruitjuice = new Fruitjiuce();
Fruitjuice.input();
Fruitjuice.discount();
Fruitjuice.display();