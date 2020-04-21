const {User} = require('./User')
const uuid = require('uuid')

class Admin extends User{
    constructor(name,email,password){
        super(name,email,password)
        // Inheirited Variables

        this.typeofuser = 'admin'
        this.location = 'Dublin:Ireland',
        this.uid = uuid.v1()
    }
    getLocation(){
        return this.location
    }
    getUuid(){
        return this.uid
    }
    gettypeofuser(){
        return this.typeofuser
    }
    // Getters 


    setLocation(location){
        this.location = location
    }
    setUuid(uid){
        this.uid = uid
    }
    setTypeofuser(typeofuser){
        this.typeofuser = typeofuser
    }
    // Setters


}

// let admin1 = new Admin('Robert','Email111','xox_password121')

// console.log({
//     id: admin1.getUuid(),
//     name: admin1.getName(),
//     password: admin1.getPassword(),
//     email: admin1.getEmail(),
//     location: admin1.getLocation(),
//     type_of_user: admin1.gettypeofuser()
// })