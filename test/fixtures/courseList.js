const { courseList } = require('../data/db');
const mock = require('../fixtures/mock');



module.exports = {
  up: () => {
    mockData = [{lundi: [{id: 1, name: 'Viande', quantity: 1, status: "nok"},{id: 2, name: 'Popcorn', quantity: 1, status: "nok"}],
                 mardi: [{id: 1, name: "pizza", quantity: 1, status: "nok"},{id: 2, name: "Popcorn", quantity: 2, status: "nok"}]}];

    courseList.splice(0);
    courseList.push.apply(courseList,  mockData);
  },

  down: () => {
    courseList.splice(0);
  }
};