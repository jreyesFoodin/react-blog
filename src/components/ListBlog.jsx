import { Card, Button, Col, Stack } from 'react-bootstrap'

const ListBlog = ({ item, handleEditForm, handledButtonRemove }) => {
  return (
    <>
      <Col>
        <Card>
          <Card.Body>
            <div className='col-md-12 mx-auto'>
              <svg class='bd-placeholder-img card-img-top' width='100%' height='225' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder: Thumbnail' preserveAspectRatio='xMidYMid slice' focusable='false'><title>Placeholder</title><rect width='100%' height='100%' fill='#55595c' /><text x='50%' y='50%' fill='#eceeef' dy='.3em'>Thumbnail</text></svg>
            </div>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1 }}>
              {item.content}
            </Card.Text>
            <Card.Text>author: {item.author}</Card.Text>
            <Card.Text>Fecha de creación: {item.publicationDate}</Card.Text>
            <Stack gap={2} className='col-md-5 mx-auto'>
              <Button variant='outline-success' onClick={() => handleEditForm(item)}>Editar</Button>
              <Button variant='outline-danger' onClick={() => handledButtonRemove(item)}>Remover</Button>
            </Stack>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ListBlog
