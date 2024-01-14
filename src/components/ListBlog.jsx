import { Card, Button, Col, Stack } from 'react-bootstrap'
import moment from 'moment-timezone'
import 'moment/locale/es'
moment.locale('es')
const ListBlog = ({ item, handleEditForm, handledButtonRemove, openModalView }) => {
  return (
    <>
      <Col>
        <Card onClick={() => openModalView(item)}>
          <Card.Body>
            <Card.Img variant='top' src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18d0554416b%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18d0554416b%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' />
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
                <Card.Text>{moment(item.publicationDate).format('DD MMMM YY')}</Card.Text>
              </div>
            </div>
            <br />
            <Stack gap={2} className='col-md-12 mx-auto'>
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
