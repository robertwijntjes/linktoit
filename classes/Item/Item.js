class Item{
    constructor(item_name,expiration,user){
        this.item_name = item_name,
        this.user = user
        this.item_type = null,
        this.item_size = null,
        this.views = 0,
        this.link = null,
        this.viewedBy = []
    }

    getItem_name(){
        return this.item_name
    }
    getUser(){
        return this.user
    }   
    getItem_type(){
        return this.item_type
    }   
    getItem_size(){
        return this.item_size
    }   
    getViews(){
        return this.views
    }   
    getLink(){
        return this.link
    }   
    getViewedBy(){
        return this.viewedBy
    }
    // Getter Methods

    setItem(item_name){
        this.item_name = item_name
        return this
    }
    setUser(user){
        this.user = user
        return this
    }   
    setItem_type(item_type){
        this.item_type = item_type
        return this
    }   
    setItem_size(item_size){
        this.item_size = item_size
        return this
    }   
    setViews(views){
        this.views = views
        return this
    }   
    setLink(link){
        this.link = link
        return this
    }   
    setViewedBy(viewedBy){
        this.viewedBy = viewedBy
        return this
    }
    // Setter Methods
}