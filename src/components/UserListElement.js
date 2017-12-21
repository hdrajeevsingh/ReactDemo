import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
export default class UserListElement extends React.Component{
   render(){
     const user = this.props.user;
     return(
       <tr>
         <td>#{user.id}</td>
         <td>{user.username}</td>
         <td>{user.job}</td>
         <td>
           <a href={'/user-edit/'+user.id}>
             <Button bsSize="xsmall">
               Edit <Glyphicon glyph="edit"/>
             </Button>
           </a>
         </td>
         <td>
           <Button data-id={user.id} data-username={user.username} bsSize="xsmall">
             Delete <Glyphicon glyph="remove-circle"/>
           </Button>

         </td>
       </tr>
     )
   }
}
/*//Make sure to have all the props
UserListElement.propTypes = {
  user : React.propTypes.isRequired
}*/
