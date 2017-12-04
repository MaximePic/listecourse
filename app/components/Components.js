class Article {
    constructor(id, name, quantity, status){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.status = status;
    }

    getId(){
        return this.id;
    }

}

class List {
    constructor(day, articles){
        this.day = day;
        this.articles = articles;
    }
}

module.exports = {
    List,
    Article
};