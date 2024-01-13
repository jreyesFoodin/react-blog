import { useEffect, useState } from 'react'
import { Container, Navbar, Row } from 'react-bootstrap'
import { useBlog } from './action/blog'
import ListBlog from './components/ListBlog'

const App = () => {
  const [data, setData] = useState([])
  const { AllListBlogAction } = useBlog()
  useEffect(() => {
    init()
  }, [])
  const init = async () => {
    const response = await AllListBlogAction()
    if (response.success) {
      setData(response.payload)
    }
  }
  return (
    <Container>
      <Navbar bg='primary' data-bs-theme='dark' expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#'>Prueba Blog</Navbar.Brand>
        </Container>
      </Navbar>
      <Row className='g-4 py-5 row-cols-1 row-cols-lg-3 mb-4'>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <ListBlog item={item} />
            </div>
          )
        })}
      </Row>
    </Container>
  )
}

export default App
