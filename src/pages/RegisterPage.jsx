import React from 'react'
import Banner from '../components/Register/Banner'
import SignUpForm from '../components/Register/SignUpForm'

export default function RegisterPage() {
  return (
    <div style={{display:"flex"}}>
      <Banner/>
      <SignUpForm/>
    </div>
  )
}
