class Food {
    constructor() {
        this.foodstock = 0
    }

    //read the food from the database
    getfood() {
        var foodRef = database.ref('food');
        foodRef.on("value", function (data) {
            this.foodstock = data.val()
console.log(this.foodstock)
        })

    }

    //write the food into the database

    updatefood(state){
        database.ref('/').update({
            food:state
        })

    }
    
    deductfood(){
this.foodstock=this.foodstock-1

    }



    display() {
        text(this.foodstock, 100, 100)

    }

}

