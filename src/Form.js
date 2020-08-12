import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {InputGroup} from "@blueprintjs/core"

function Formy(){
  return <Formik
    initialValues={{ username: '', password: '' }}
    validate={values => {
      const errors = {};
      if (!values.username) {
        errors.username = 'Email is Required';
      } else if (values.username.length<6) {
        errors.username = 'Username too short';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Field type="text" name="username" 
            onChange={e=> setFieldValue('username', e.target.value)}/>
        <ErrorMessage name="username" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
}

function Field({type,name, onChange}){
    return <InputGroup
        name = {name}
        type = {type}
        placeholder= {'Enter your' + name}
        onChnage = {onChange}
        onBlur = {onBlur}
    />
}

export default Formy