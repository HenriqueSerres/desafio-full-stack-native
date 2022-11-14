import React, { useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import { PropTypes } from 'prop-types'

function EditUserForm(props) {
  const {
    updateUser,
    user
  } = useContext(UserContext);

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const gender = useRef();
  const company = useRef();
  const city = useRef();
  const title = useRef();


  const handleEdit = (event) => {
    event.preventDefault();
    const newUser = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      email: email.current.value,
      gender: gender.current.value,
      company: company.current.value,
      city: city.current.value,
      title: title.current.value
    }
    updateUser(user.id, newUser);
    props.closeEdit()
  }

  return (
    <form onSubmit={ handleEdit }>
      <label htmlFor="first_name">first name      
        <input
          id="first_name"
          type='text' ref={firstName}
        />
      </label>
      <label htmlFor="last_name">last name      
        <input
          id="last_name"
          type='text' ref={lastName}
        />
      </label>
      <label htmlFor="email">email      
        <input
          id="email"
          type='text' ref={email}
        />
      </label>
      <label htmlFor="gender">gender      
        <input
          id="gender"
          type='text' ref={gender}
        />
      </label>
      <label htmlFor="company">company      
        <input
          id="company"
          type='text' ref={company}
        />
      </label>
      <label htmlFor="city">city      
        <input
          id="city"
          type='text' ref={city}
        />
      </label>
      <label htmlFor="title">title      
        <input
          id="title"
          type='text' ref={title}
        />
      </label>
      <input type="submit" value='Confirmar'/>
    </form>
  )
}
EditUserForm.propTypes = {
  closeEdit: PropTypes.func
}


export default EditUserForm;