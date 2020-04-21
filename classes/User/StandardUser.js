const {User} = require('./User')

class StandardUser extends User{
    constructor(name,email,password){
        super(name,email,password)
        // Inheirited Variables

        this.typeofuser = 'basic'
        this.location = 'Dublin:Ireland',
        this.uid = uuid.v1,
        this.verified = verified,
        this.posted_data = posted_data
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
    getVerified(){
        return this.verified
    }
    getPostedData(){
        return this.posted_data
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

// let standardUser = new StandardUser('Robert','Email111','xox_password121')

// console.log({
//     id: standardUser.getUuid(),
//     name: standardUser.getName(),
//     password: standardUser.getPassword(),
//     email: standardUser.getEmail(),
//     location: standardUser.getLocation(),
//     type_of_user: standardUser.gettypeofuser()
// })
