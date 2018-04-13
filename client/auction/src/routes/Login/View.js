import React, { Component } from 'react';
import {Field, reduxForm, SubmissionError } from 'redux-form';
import { Container, Content, Text, InputGroup, Icon, Form, Item, Input, Button} from 'native-base'


const onSubmit = ({ email='', password='' }, requestLogin) => {
 let errors = {email, password};
 let isError = false;

 if (password === ''){
   errors.password = 'required';
   isError = true;
 }

if(email === ''){
  errors.email = 'required'
  isError = true;
}

if (isError){
  throw new SubmissionError(errors);

} else {
  requestLogin({ password, email });
}
}


const renderField = ({ input: { onChange, ...restInput }, placeholder, secureTextEntry, meta: { touched, error } }) => (
  <InputGroup error={touched && error ? true : false}>
    <Input
      placeholder={placeholder}
      autoCapitalize='none'
      onChangeText={onChange}
      {...restInput}
      secureTextEntry={secureTextEntry}
      />
    { touched && error && <Icon name='ios-close-circle' style={{color:'red'}}/> }
  </InputGroup>
)


const login = ({ handleSubmit, requestLogin }) => (
  <Container>
    <Content>
      <Form>
        <Item>
          <Field name='email' placeholder='Email' component={renderField} />
        </Item>
        <Item last>
          <Field name='password' placeholder='Password' component={renderField} secureTextEntry />
        </Item>
        <Button onPress={handleSubmit((field) => onSubmit(field, requestLogin))} >
          <Text>Login</Text>
        </Button>
      </Form>
    </Content>
  </Container>
)

export default reduxForm({
  form: 'login',
})(login);
