class hotel{
Rno; Nod; name; Traffic;
calc(){
    let amount;
    amount=this.Nod*this.Traffic;
    if(amount>10000)
    amount=amount*1.05;
    return amount
}
checkin()
{
    this.Rno=parseInt(prompt("enter the room no"));
    this.name=prompt("enter the name")
    this.Traffic=parseInt(prompt("enter the traffic"))
    this.Nod=parseInt(prompt("enter the no.of days"))
}
checkout()
{
    document.write("room no"+this.Rno+"<br>");
    document.write("name"+this.name+"<br>");
    document.write("room no"+this.Traffic+"<br>");
    document.write("room no"+this.Nod+"<br>");
    document.write("room no"+this.calc());
}

    
}
let h=new hotel
h.checkin()
h.checkout()