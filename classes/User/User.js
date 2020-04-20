const uuid = require('uuid')

class User{
    constructor(name,email,password){
        this.name = name,
        this.email = email,
        this.password = password,
        // Entered Data


        this.location = location,
        this.uid = uuid.v1
        // Automatically generated Data
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getPassword(){  
        return this.password
    }
    getLocation(){
        return this.location
    }
    getUuid(){
        return this.uid
    }
    // Getter Methods


    setName(name){
        this.name = name
    }
    setEmail(email){
        this.email = email
    }
    setPassword(password){
        this.password = password
    }
    setLocation(location){
        this.location = location
    }
    setUuid(uid){
        this.uid = uid
    }
}