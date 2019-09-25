import jsonServerProvider from 'ra-data-json-server'
export default class UserListService {
  userList () {
    const dataProvider = jsonServerProvider(
      'http://jsonplaceholder.typicode.com'
    )
    return dataProvider
  }
}
