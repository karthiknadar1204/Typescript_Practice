// const User = {
//     name: "Karthik",
//     email: "karthiknadar1204@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "Karthik", isPaid: false, email: "k@k.com"}

// createUser(newUser)



// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string  //    ->ReadOnly:basically makes this property unalterable i.e cannot be changed or updated.
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number  //    ->Optional:basically not a compulsory input needed.
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "k@k.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "k@gmail.com"
// myUser._id = "asa"








export {}