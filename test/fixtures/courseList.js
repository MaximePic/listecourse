const { courseList } = require('../data/db')
const mock = require('../fixtures/mock')

mockData = mock.standardArticleList

module.exports = {
  up: () => {
    courseList.splice(0)
    courseList.push.apply(courseList, mockData)
  },

  down: () => {
    courseList.splice(0)
  }
}