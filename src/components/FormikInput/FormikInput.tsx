import React from 'react'
import { ErrorMessage, Field } from 'formik'

type Props = {
    label?:string,
    name:string,
    as?:string,
    type?:string,
    placeholder?:string,
    rows?:string,
    cols?:string
}

const FormikInput = (props: Props) => {
  return (
    <div className='mb-3'>
            <label className="form-label">{props.label}</label>
            <Field className="form-control" as={props.as} type={props.type} name={props.name} placeholder={props.placeholder} rows={props.rows} cols={props.cols} />
            <ErrorMessage name={props.name} render={error =>
                <label className='text-danger' content={error}>{error}</label>
            }></ErrorMessage>
    </div>
  )
}

export default FormikInput