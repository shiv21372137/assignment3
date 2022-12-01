// define class fight with the following description
 class flight{
    flNo;
    dest;
dist;
fuel;
calfuel()
{
if(this.dist<=1000)
this.fuel=500;
else if (this.dist>1000 && this.dist<=2000)
this.fuel=1100
else
this.fuel=2200;
}
feedinfo()
{
    this.flNo=prompt("enter the flight no");
    this.dest=prompt("enter the destination");
    this.dist=parseInt(prompt("enter the distance"));
    this.calfuel

}
showinfo()
{
    document.write("flight no:"+this.flNo+"<br>")
    document.write("designation"+this.dest+"<br>")
    document.write("distance"+this.dist+"<br>")

    document.write("fuel"+this.fuel+"<br>")

}


 }
 let Flight=new flight()
 Flight.feedinfo();
 flight.showinfo();