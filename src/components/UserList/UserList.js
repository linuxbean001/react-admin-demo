import React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'

import UserListService from '../../service/UserList'

const userApi = new UserListService()

class UserList extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {}

  render () {
    return (
      <Admin dataProvider={userApi.userList()}>
        <Resource name='users' list={ListGuesser} />
      </Admin>
    )
  }
}

export default UserList
