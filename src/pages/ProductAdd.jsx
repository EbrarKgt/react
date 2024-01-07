import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import TobetoTextInput from "../utilities/customFormControls/TobetoTextInput";

export default function ProductAdd() {
  const initialValues = { title: "", price: 10 };

  const schema = Yup.object({
    title: Yup.string().required("ürün adı zorunludur"),
    price: Yup.number().required("ürün fiyatı zorunludur"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <TobetoTextInput name="title" placeholder="Ürün adı" />
          <TobetoTextInput name="price" placeholder="Ürün fiyatı" />
          <Button color="green" type="submit">
            ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
