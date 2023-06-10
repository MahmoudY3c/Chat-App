import React from 'react';
import FormData from '../../JSON/Forms/login.json'
import FormLayout from '../../Layouts/FormLayout';
import { AppHeader } from '../../Styles/defaults/App';

function index(props) {
  const auth =[
    {
      image: "google.png",
      title: "Login With Google",
      alt: "Login With Google"
    },
    {
      image: "twitter.png",
      title: "Login With Twitter",
      alt: "Login With Twitter"
    }
  ]
  return (
    <header css={AppHeader}>
      <FormLayout FormData={FormData} title="Login Page" auth={auth} key="login" />
    </header>
  );
}

export default index;