import { Button } from 'react-bootstrap'
import Search from './Search'
const Header = ({ handleClickButton, searchTerm, handleSearch, isNetwork }) => {
  return (
    <div className='d-md-flex align-items-center justify-content-between mb-4'>
      <div>
        {!isNetwork && <Button variant='success' onClick={() => handleClickButton('add')}>Agregar nuevo Libro</Button>}
      </div>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
    </div>
  )
}

export default Header
