import { Form, Formik } from 'formik'
import * as Yup from "yup"
import FormikInput from '../../components/FormikInput/FormikInput'
import { passwordValidator } from '../../utilities/customValidations'
type Props = {}

const AddProduct = (props: Props) => {

  const initialValues = {
    title:"",
    description: "",
    price: 0,
    stock: 0
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("YOOOOOK").min(3).max(50)
    .test("buyuk-kucuk-sayi","En Az 1 Büyük Harf, 1 Küçük Harf ve 1 Sayı Giriniz!", passwordValidator),
    description: Yup.string().required().min(5).max(300),
    price: Yup.number().required().min(0),
    stock: Yup.number().required("YOOK").min(0).integer()
  })

  return (
    <div className="container mt-5">
      <Formik  
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values)
      }} >
      <Form>
            <FormikInput name='title' label='Ürün Adı'/>
            <FormikInput name='description' label='Ürün Açıklaması'/>
            <FormikInput type='number' name='price' label='Ürün Fiyatı'/>
            <FormikInput type='number' name='stock' label='Ürün Stok'/>
            <button type="submit" className="btn btn-primary">
                Kaydet
            </button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddProduct