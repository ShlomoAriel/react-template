import React from 'react';
import TextInput from'../../../Elements/TextInput/TextInput'

const Signup = ({form, authenticated, userList, onInputFieldChange, addUser, removeUser, currentUserId}) => {
	let formFields = {}
    formFields['emailInput'] = { fieldClass:'form-control',field: 'email', name:'email', placeholder: 'דואר אלקטרוני', value: form.email, onUpdate: onInputFieldChange }
    formFields['passwordInput'] = { type:'password', fieldClass:'form-control',field: 'password', name:'password', placeholder: 'סיסמה', value: form.password, onUpdate: onInputFieldChange }
    formFields['passwordConfirmInput'] = { type:'password', fieldClass:'form-control',field: 'passwordConfirm', name:'passwordConfirm', placeholder: 'וידוא סיסמה', value: form.passwordConfirm, onUpdate: onInputFieldChange }
    
    formFields['identityNumberInput'] = {fieldClass:'form-control',field: 'identityNumber', name:'identityNumber', placeholder: 'ת.ז', value: form.identityNumber, onUpdate: onInputFieldChange }
    formFields['nameInput'] = {fieldClass:'form-control',field: 'name', name:'name', placeholder: 'שם פרטי', value: form.name, onUpdate: onInputFieldChange }
    formFields['lastNameInput'] = {fieldClass:'form-control',field: 'lastName', name:'lastName', placeholder: 'שם משפחה', value: form.lastName, onUpdate: onInputFieldChange }
    
    formFields['phoneInput'] = {fieldClass:'form-control',field: 'phone', name:'phone', placeholder: 'טלפון', value: form.phone, onUpdate: onInputFieldChange }
    formFields['addressInput'] = {fieldClass:'form-control',field: 'address', name:'address', placeholder: 'כתובת', value: form.address, onUpdate: onInputFieldChange }
    
	return (
		  <div className="user-dashboard">
		  	<div className="fade-in">
			  <div className="user">
			  	<div className="user-list list-general-wrapper">
				  	<div>
			  			<h3>רשימת מתאמנים</h3>
			  			<div>
			  				<div className="custom-row">
								<div>שם פרטי</div>
								<div>שם משפחה</div>
								<div>טלפון</div>
								<div></div>
								<div></div>
								<div></div>
							</div>
			  				{
			  					userList.map( user =>
			  						<div key={user._id} className="custom-row">
			  							<div>{user.name}</div>
			  							<div>{user.email}</div>
			  							<div>{user.phone}</div>
			  							<div><i className="fa fa-trash-o" onClick={()=>removeUser(user._id)}></i></div>
			  							<div><i className="fa fa-pencil" onClick={()=>setEeditUser(user._id)}></i></div>
			  							{user._id == currentUserId &&
			  								<div><i className="fa fa-save" onClick={()=>updaeUser(user._id)}></i></div>
			  							}
			  						</div>
			  						)
			  				}
			  			</div>
				  	</div>
				  </div>
			  	<div>
				  	<form>
				  		<h3>משתמש</h3>
					  	<div className="form">
					  		<div>
						  		<TextInput {...formFields['emailInput']}/>
					  		</div>
					  		<div>
						  		<TextInput {...formFields['nameInput']}/>
						  	</div>
						  	<div>
						  		<TextInput {...formFields['passwordInput']}/>
					  		</div>
						  	<div>
						  		<TextInput {...formFields['passwordConfirmInput']}/>
						  	</div>
					  	</div>
				  	</form>
				  {
				  	// <form>
				  	// 	<h3>תקשורת</h3>
					  // 	<div className="form">
					  // 		<div>
						 //  		<TextInput {...formFields['phoneInput']}/>
						 //  	</div>
					  // 		<div>
						 //  		<TextInput {...formFields['addressInput']}/>
						 //  	</div>
					  // 	</div>
				  	// </form>
				  }	
		  		</div>
		  		{
		  			// <div>
					  // 	<form>
					  // 		<h3>אישיים</h3>
						 //  	<div className="form">
						 //  		<div>
							//   		<TextInput {...formFields['identityNumberInput']}/>
							//   	</div>
						 //  		<div>
							//   		<TextInput {...formFields['firstNameInput']}/>
							//   	</div>
						 //  		<div>
							//   		<TextInput {...formFields['lastNameInput']}/>
							//   	</div>
							//   	<div className="button-holder">
	  				// 		  		<input className="form-control"/>
	  				// 		  		<button className="fa fa-arrow-circle-o-right login-button" onClick={addUser}></button>
	  				// 	  		</div>
						 //  	</div>
					  // 	</form>
				  	// </div>
		  		}
			  	{
			  		// <form onSubmit={addUser}>
			  		// 		  		<h3>הוספת מתאמנים</h3>
			  		// 			  	<div className="form">
			  		// 				  	{
			  		// 				  		Object.keys(formFields).map( fieldKey =>
			  		// 					  		<div key={fieldKey}>
			  		// 						  		<TextInput {...formFields[fieldKey]}/>
			  		// 						  	</div>	
			  		// 				  		)
			  		// 				  	}
			  		// 				  	<div className="button-holder">
			  		// 				  		<input className="form-control"/>
			  		// 				  		<button className="fa fa-arrow-circle-o-right login-button"></button>
			  		// 			  		</div>
			  		// 			  	</div>
			  		// 		  	</form>
			  				  }
			  </div>
		  	</div>
		  </div>
);
}
export default Signup;
