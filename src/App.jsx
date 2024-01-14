import { Container, Navbar, Row } from 'react-bootstrap'
import { useBlogInit } from './hooks/useBlogInit'
import ListBlog from './components/ListBlog'
import ModalForm from './components/ModalForm'
import Header from './components/Header'
import Loading from './components/Loading'
import NotFound from './components/NotFound'
import ModalView from './components/ModalView'

const App = () => {
  const {
    filteredData,
    status,
    loading,
    info,
    show,
    searchTerm,
    showView,
    infoView,
    handleClickButton,
    handleActionForm,
    handleClose,
    handleEditForm,
    handledButtonRemove,
    handleSearch,
    handleCloseView,
    openModalView
  } = useBlogInit()
  return (
    <Container>
      <Navbar bg='primary' data-bs-theme='dark' expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#'>Prueba Blog</Navbar.Brand>
        </Container>
      </Navbar>
      <ModalView
        blogData={infoView}
        show={showView}
        handleClose={handleCloseView}
      />
      <ModalForm
        show={show}
        handleActionForm={handleActionForm}
        status={status}
        handleClose={handleClose}
        info={info}
      />
      <br />
      <Header handleClickButton={handleClickButton} searchTerm={searchTerm} handleSearch={handleSearch} />
      {loading
        ? <Loading />
        : (
          <>
            {filteredData.length > 0
              ? (
                <>
                  <Row className='g-4 py-5 row-cols-1 row-cols-lg-3 mb-4'>
                    {filteredData.map((item, key) => {
                      return (
                        <div key={key}>
                          <ListBlog
                            item={item}
                            handleEditForm={handleEditForm}
                            handledButtonRemove={handledButtonRemove}
                            openModalView={openModalView}
                          />
                        </div>
                      )
                    })}
                  </Row>
                </>
                )
              : <NotFound searchTerm={searchTerm} />}
          </>
          )}
    </Container>
  )
}

export default App
