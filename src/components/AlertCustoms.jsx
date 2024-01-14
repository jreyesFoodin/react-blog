import { Alert } from 'react-bootstrap'

const AlertCustoms = ({ searchTerm, title, titleSearch, variant }) => {
  return (
    <Alert variant={variant}>
      <Alert.Heading style={{ textAlign: 'center' }}>{title}</Alert.Heading>
      {searchTerm?.length > 0 &&
        <p style={{ textAlign: 'center', fontSize: 15 }}>
          {titleSearch}
        </p>}
    </Alert>
  )
}

export default AlertCustoms
