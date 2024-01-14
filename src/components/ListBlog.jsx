import { Card, Button, Col, Stack } from 'react-bootstrap'
import { formatDate } from '../util'
import { placeholderImage } from '../constants'

const ListBlog = ({ item, handleEditForm, handledButtonRemove, openModalView, isNetwork }) => {
  return (
    <>
      <Col>
        <Card>
          <Card.Body onClick={() => openModalView(item)}>
            <Card.Img variant='top' src={placeholderImage} />
            <br /><br />
            <Card.Title>Titulo: {item.title}</Card.Title>
            <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
              {item.content}
            </Card.Text>
            <div className='d-flex justify-content-between'>
              <div>
                <Card.Text><strong>Autor:</strong> {item.author}</Card.Text>
              </div>
              <div>
                <Card.Text>{formatDate(item.publicationDate)}</Card.Text>
              </div>
            </div>
            <br />
          </Card.Body>
          {!isNetwork &&
            <Card.Footer>
              <Stack gap={2} className='col-md-12 mx-auto'>
                <Button variant='outline-success' onClick={() => handleEditForm(item)}>Editar</Button>
                <Button variant='outline-danger' onClick={() => handledButtonRemove(item)}>Remover</Button>
              </Stack>
            </Card.Footer>}
        </Card>
      </Col>
    </>
  )
}

export default ListBlog
