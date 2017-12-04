const { courseList } = require('../data/db');
const mock = require('../fixtures/mock');



module.exports = {
  up: () => {
    mockData = [{lundi: [{id: 1, name: 'Viande', quantity: 1, status: "nok"},{id: 2, name: 'Popcorn', quantity: 1, status: "nok"}],
                 mardi: [{id: 1, name: "pizza", quantity: 1, status: "nok"},{id: 2, name: "Popcorn", quantity: 2, status: "nok"}]}];
    console.log("Setting up the data ...");
    console.log("MockData" + JSON.stringify(mockData));
    console.log("CourseListBefore" + JSON.stringify(courseList));
    courseList.splice(0);
    //console.log("MOOOOOOCK " + JSON.stringify(mock.standardArticleList));
    courseList.push.apply(courseList,  mockData);
    console.log("courseListAfter" + JSON.stringify(courseList));
  },

  down: () => {
    console.log("Emptying the data ...");
    courseList.splice(0);
  }
};