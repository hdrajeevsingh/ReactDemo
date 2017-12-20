import React from 'react';

import UserList from './UserList';
/**
 * App component
 */
export default class App extends React.Component{

  constructor(props){
    super(props);
    const users = [];
    for(let i=0;i<10;i++){
      users.push(
        {
          id:i,
          username:'rajeev '+i,
          job:'Employee '+i
        }
      )
    }
    this.state = {
      users:users
    }
  }
 render(){
   return(
     <UserList users={this.state.users}/>
   )




 }
}
