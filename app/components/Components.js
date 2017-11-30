function Article(name, quantity, status){
    this.name = name;
    this.quantity = quantity;
    this.status = status;
}

function List(day, articles){
    this.day = day,
    this.articles = articles
}

module.exports = {
    Article,
    List
}