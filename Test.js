import React, { useState } from "react"
import { Form, Button } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker'

const Test = () => {
 const schema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    emailAddress: yup.string()
      .email()
      .required("Required")
      .matches(/^([a-zA-Z0-9_\.\-]+){3}@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, "minimum three char before @"),
    address: yup.string()
      .required("Required")
      .min(20, "Minimum use 20 words")
      .max(288, "maximum use 288 word"),
    pinCode: yup.string()
      .required("Required")
      .min(5, "Minimum use 5 words")
      .max(7, "maximum use 7 word"),
    bankAccount: yup.string()
      .required("Required")
      .matches(/^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/, "Please follow the pattern 2 digits - 3 digits - 6 digits"),
    token: yup.string().required("Required")
      .min(5, "Minimum use 5 words")
      .max(20, "maximum use 20 word"),

  });
  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "",
          emailAddress: "",
          address: "",
          pinCode: "",
          bankAccount: "",
          token: "",
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true)
          console.log('Submit', data);
          setSubmitting(false)
        }}
      >
        {({ handleSubmit, handleChange, values, isSubmitting, touched, errors }) => (

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
                isValid={touched.lastName && !errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik04">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                name="emailAddress"
                placeholder="Email Address"
                value={values.emailAddress}
                onChange={handleChange}
                isInvalid={!!errors.emailAddress}
                isValid={touched.emailAddress && !errors.emailAddress}
              />
              <Form.Control.Feedback type="invalid">
                {errors.emailAddress}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik05">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Address"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
                isValid={touched.address && !errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik06">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                value={values.pinCode}
                onChange={handleChange}
                isInvalid={!!errors.pinCode}
                isValid={touched.pinCode && !errors.pinCode}
              />
              <Form.Control.Feedback type="invalid">
                {errors.pinCode}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik07">
              <Form.Label>Bank Account</Form.Label>
              <Form.Control
                type="text"
                name="bankAccount"
                placeholder="Bank Account"
                value={values.bankAccount}
                onChange={handleChange}
                isInvalid={!!errors.bankAccount}
                isValid={touched.bankAccount && !errors.bankAccount}
              />
              <Form.Control.Feedback type="invalid">
                {errors.bankAccount}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik08">
              <Form.Label>Token</Form.Label>
              <Form.Control
                type="text"
                name="token"
                placeholder="Token"
                value={values.token}
                onChange={handleChange}
                isInvalid={!!errors.token}
                isValid={touched.token && !errors.token}
              />
              <Form.Control.Feedback type="invalid">
                {errors.token}
              </Form.Control.Feedback>
            </Form.Group>

            <Button disabled={isSubmitting} type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Test;