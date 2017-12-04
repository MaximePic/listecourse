const standardArticleList = [{
    lundi: [
        {id: 1, name: 'Viande', quantity: 1, status: "nok"},
        {id: 2, name: 'Popcorn', quantity: 1, status: "nok"}
    ],
    mardi: [
        {id: 1, name: "pizza", quantity: 1, status: "nok"},
        {id: 2, name: "Popcorn", quantity: 2, status: "nok"}
    ]
}];

const articleListAfterAdded = [{
    lundi: [
        {id: 1, name: 'Viande', quantity: 1, status: "nok"},
        {id: 2, name: 'Popcorn', quantity: 1, status: "nok"},
        {id: 3, name: 'Iphone', quantity: 1, status: "nok"}
    ],
    mardi: [
        {id: 1, name: "pizza", quantity: 1, status: "nok"},
        {id: 2, name: "Popcorn", quantity: 2, status: "nok"}
    ]
}];

   


const mondayList = [
    {id: 1, name: 'Viande', quantity: 1, status: "nok"},
    {id: 2, name: 'Popcorn', quantity: 1, status: "nok"}
];

const tuesdayList = [
    {id: 1, name: "pizza", quantity: 1, status: "nok"},
    {id: 2, name: "Popcorn", quantity: 2, status: "nok"}
];

  module.exports = {
      standardArticleList,
      mondayList,
      tuesdayList,
      articleListAfterAdded
    };