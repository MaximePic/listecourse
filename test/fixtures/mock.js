const standardArticleList = {
    lundi:{
      day: "lundi",
      articles: {
        list: [
        {"name": "Tomates", "quantity": 3, "status":"nok"},
        {"name": "Mozarella", "quantity": 3, "status":"nok"}
      ]}
    },
    mardi:{
      day: "mardi",
      articles: {
        list: [
        {"name": "Lait", "quantity": 6, "status":"nok"},
        {"name": "oeufs", "quantity": 12, "status":"nok"}
      ]}
    },
    mercredi:{
      day: "mercredi",
      articles:{
        list:[
        {"name": "Pizza", "quantity": 1, "status":"nok"},
        {"name": "Bieres", "quantity": 8, "status":"nok"}
      ]}
    },
    jeudi:{
      day: "jeudi",
      articles: {
        list: [
        {"name": "Pâtes", "quantity": 1, "status":"nok"},
        {"name": "Poulet", "quantity": 1, "status":"nok"}
      ]}
    },
    vendredi:{
      day: "vendredi",
      articles: {
        list: [
        {"name": "Poisson", "quantity": 1, "status":"nok"},
        {"name": "riz", "quantity": 1, "status":"nok"}
      ]}
    }
  }


const articles = {
    list: [
      {"name": "eau", "quantity": 12, "status":"nok"},
      {"name": "jambon", "quantity": 1, "status":"nok"},
      {"name": "yaourt", "quantity": 6, "status":"nok"},
      {"name": "ketchup", "quantity": 1, "status":"nok"}
    ]
  }



  const listAfterArticleAdded = {
    lundi:{
      day: "lundi",
      articles: {
        list: [
        {"name": "Tomates", "quantity": 3, "status":"nok"},
        {"name": "Mozarella", "quantity": 3, "status":"nok"},
        {"name": "Iphone", "quantity": 1, "status": "nok"}
      ]}
    },
    mardi:{
      day: "mardi",
      articles: {
        list: [
        {"name": "Lait", "quantity": 6, "status":"nok"},
        {"name": "oeufs", "quantity": 12, "status":"nok"}
      ]}
    },
    mercredi:{
      day: "mercredi",
      articles:{
        list:[
        {"name": "Pizza", "quantity": 1, "status":"nok"},
        {"name": "Bieres", "quantity": 8, "status":"nok"}
      ]}
    },
    jeudi:{
      day: "jeudi",
      articles: {
        list: [
        {"name": "Pâtes", "quantity": 1, "status":"nok"},
        {"name": "Poulet", "quantity": 1, "status":"nok"}
      ]}
    },
    vendredi:{
      day: "vendredi",
      articles: {
        list: [
        {"name": "Poisson", "quantity": 1, "status":"nok"},
        {"name": "riz", "quantity": 1, "status":"nok"}
      ]}
    }
  }

const dataLundi = [{
      day: "lundi",
      articles: {
        list: [
        {"name": "Tomates", "quantity": 3, "status":"nok"},
        {"name": "Mozarella", "quantity": 3, "status":"nok"}
    ]}
  }]

const dataMardi = [{
    day: "mardi",
    articles: {
      list: [
      {"name": "Lait", "quantity": 6, "status":"nok"},
      {"name": "oeufs", "quantity": 12, "status":"nok"}
    ]}
  }]


const article = {name: "Iphone", quantity: 1, status: "nok"}

// const newArticleList= {
//   lundi:{
//     day: "lundi",
//     articles: {
//       list:[
//       {"name": "Tomates", "quantity": 3, "status":"nok"},
//       {"name": "Mozarella", "quantity": 3, "status":"nok"}
//     ]}
//   },
//   mardi:{
//     day: "mardi",
//     articles: {
//       list: [
//       {"name": "Lait", "quantity": 6, "status":"nok"},
//       {"name": "oeufs", "quantity": 12, "status":"nok"}
//     ]}
//   },
//   mercredi:{
//     day: "mercredi",
//     articles: {
//       list: [
//     {"name": "Pizza", "quantity": 1, "status":"nok"},
//       {"name": "Bieres", "quantity": 8, "status":"nok"}
//     ]}
//   },
//   jeudi:{
//     day: "jeudi",
//     articles: {
//       list: [
//       {"name": "Pâtes", "quantity": 1, "status":"nok"},
//       {"name": "Poulet", "quantity": 1, "status":"nok"}
//     ]}
//   },
//   vendredi:{
//     day: "vendredi",
//     articles: {
//       list:[
//       {"name": "Poisson", "quantity": 1, "status":"nok"},
//       {"name": "riz", "quantity": 1, "status":"nok"}
//     ]}
//   },
//   samedi:{
//     day: "samedi",
//     articles:{
//       list: [
//       {"name": "eau", "quantity": 12, "status":"nok"},
//       {"name": "jambon", "quantity": 1, "status":"nok"},
//       {"name": "yaourt", "quantity": 6, "status":"nok"},
//       {"name": "ketchup", "quantity": 1, "status":"nok"}
//     ]}
//   }
// }

module.exports = {
  standardArticleList,
  dataLundi,
  dataMardi,
  articles,
  listAfterArticleAdded
};
  
  
  