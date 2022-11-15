import React, { useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import { PropTypes } from 'prop-types';
import * as S from './EditUserForm.styled';
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
    <S.UserForm onSubmit={ handleEdit }>
        <S.TextInput
          placeholder="First Name"
          id="first_name"
          type='text' ref={firstName}
        />
        <S.TextInput
          placeholder="Last Name"
          id="last_name"
          type='text' ref={lastName}
        />
        <S.TextInput
          placeholder="Email"
          id="email"
          type='text' ref={email}
        />
        <S.TextInput
          placeholder="Gender"
          id="gender"
          type='text' ref={gender}
        />
        <S.TextInput
          placeholder="Company"
          id="company"
          type='text' ref={company}
        />
        <S.TextInput
          placeholder="City"
          id="city"
          type='text' ref={city}
        />
       <S.TextInput
          placeholder="Title"
          id="title"
          type='text' ref={title}
        />
      <S.ConfirmButton type="submit" value='Confirmar'/>
    </S.UserForm>
  )
}
EditUserForm.propTypes = {
  closeEdit: PropTypes.func
}


export default EditUserForm;