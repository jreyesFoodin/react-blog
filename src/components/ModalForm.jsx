import { useEffect, useState } from 'react'
import { Modal, Col, Row } from 'react-bootstrap'
import { Formik, Form as FormFormik } from 'formik'
import InputText from '../components/InputText'
import InputDate from './InputDate'
import TextArea from './TextArea'
import Button from '../components/Button'
import * as Yup from 'yup'

const ModalForm = ({ show, handleClose, status, handleActionForm, info }) => {
  const [loading, setLoading] = useState(false)
  const [idBlog, setIdBlog] = useState(null)
  const [initialValues] = useState({
    title: '',
    author: '',
    publicationDate: null,
    content: ''
  })
  useEffect(() => {
    if (status === 'edit') {
      setIdBlog(info.id)
    }
  }, [status])
  const validationSchema = Yup.object({
    title: Yup.string().required('El título es requerido'),
    author: Yup.string().required('El autor es requerido'),
    publicationDate: Yup.date().nullable().required('La fecha de publicación es requerida'),
    content: Yup.string().required('El contenido es requerido')
  })
  return (
    <Modal show={show} onHide={handleClose} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>{status === 'add' ? 'Agregar Blog' : 'Editar Blog'}</Modal.Title>
      </Modal.Header>
      <Formik
        enableReinitialize
        initialValues={status === 'add' ? initialValues : info}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setLoading(true)
          await handleActionForm(status, values, idBlog)
          setLoading(false)
        }}
      >
        <FormFormik>
          <Modal.Body>
            <Row className='mb-3'>
              <Col sm='12'>
                <label className='col-sm-6 col-form-label form-label'>Titulo<span className='text-danger'>*</span></label>
                <InputText name='title' />
              </Col>
              <Col sm='12'>
                <label className='col-sm-12 col-form-label form-label'>Contenido<span className='text-danger'>*</span></label>
                <TextArea name='content' />
              </Col>
              <Col />
            </Row>
            <Row className='mb-3'>
              <Col sm='6'>
                <label className='col-sm-6 col-form-label form-label'>Creador<span className='text-danger'>*</span></label>
                <InputText name='author' />
              </Col>
              <Col sm='6'>
                <label className='col-sm-12 col-form-label form-label'>Fecha de creación<span className='text-danger'>*</span></label>
                <InputDate name='publicationDate' />
              </Col>
              <Col />
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant='primary' loading={loading} disabled={loading} type='submit'>
              {status === 'add' ? 'Guardar' : 'Editar'}
            </Button>
          </Modal.Footer>
        </FormFormik>
      </Formik>
    </Modal>
  )
}

export default ModalForm
