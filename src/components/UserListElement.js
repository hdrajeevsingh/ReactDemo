import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
class UserListElement extends React.Component{
  constructor(props){
    super(props);
    //bind this to event methods
    this.modalDeleteShow = this.modalDeleteShow.bind(this);
  }
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
           <Button data-id={user.id} data-username={user.username} bsSize="xsmall"
                   onClick={this.modalDeleteShow}>
             Delete <Glyphicon glyph="remove-circle"/>
           </Button>

         </td>
       </tr>
     )
   }
   /*
   Prompt to delete the user
    */
  modalDeleteShow(event){
     const user_id = Number(event.target.dataset.id);
     const username = event.target.dataset.username;
   this.props.dispatch({
     type:'users.modalDeleteShow',
     id:user_id,
     username:username
   })
  }
}
export default connect()(UserListElement);
