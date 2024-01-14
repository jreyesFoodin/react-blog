import { Modal, Button, Card } from 'react-bootstrap'
import { formatDate } from '../util'
import { placeholderImage } from '../constants'
const ModalView = ({ blogData, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{blogData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.Img variant='top' src={placeholderImage} />
        <p><strong>Autor:</strong> {blogData.author}</p>
        <p><strong>Fecha de creación:</strong> {formatDate(blogData.publicationDate)}</p>
        <p><strong>Contenido:</strong> {blogData.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default ModalView
