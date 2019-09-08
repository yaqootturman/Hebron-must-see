import React from 'react'
import { Formik } from 'formik'
import * as EmailValidator from 'email-validator'
// import * as Yup from 'yup'

const validatedLoginForm = () => {
  console.log('heeeere')
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log('Logging In', values)
          setTimeout(false)
        }, 500)
      }}
      validate={values => {
        let errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = 'Invalid email address'
        }
        const passwordRegex = /(?=.*[0-9])/
        if (!values.password) {
          errors.password = 'Required'
        } else if (values.password.length < 6) {
          errors.password = 'Password must be more than 6 characters long'
        } else if (!passwordRegex.test(values.password)) {
          errors.password =
            'Invalid password . Must contain at least one number'
        }
        return errors
      }}
    >
      {props => {
        const { values, handleChange, submit, handleBlur } = props
        return (
          <form>
            <label htmlFor="email">
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="password">
              <input
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <button type="submit" value="Submit" onClick={submit}>
              Login
            </button>
          </form>
        )
      }}
    </Formik>
  )
}

export default validatedLoginForm
