class moviemagic {



    year;
    title;
    rating;
    
    input() {
        this.year = parseInt(prompt('Enter movie year'))
        this.title = prompt('Enter movie title')
        this.rating = parseFloat(prompt('Enter  movie rating'))

    }
    display() {
        if (this.rating <= 2.0) {
            document.write('Flop')
        }
        else if (this.rating >= 2.1 && this.rating <= 3.4)
         {
            document.write('Semi-Hit')
        }
        else if (this.rating >= 3.5 && this.rating <= 4.5) 
        {
            document.write('Hit')
        }
        else if (this.rating >= 4.6 && this.rating <= 5.0)
         {
            document.write('Super Hit')
        }
    }
}
let s = new moviemagic()
s.input()
s.display()



