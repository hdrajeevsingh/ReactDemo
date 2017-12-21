import React from 'react';

import UserList from './UserList';
/**
 * App component
 */
export default class App extends React.Component{
 render(){
   return(
     <div className="container">
        <UserList/>
     </div>
   )
 }
}
