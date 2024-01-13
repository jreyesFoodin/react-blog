import { useField } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const InputDate = ({ label, onChange, ...props }) => {
  const [field, meta, helpers] = useField(props)
  const handleChange = (date) => {
    helpers.setValue(date)
    onChange && onChange(date)
  }

  return (
    <div className='col-md-12'>
      <div className='input-group has-validation'>
        <DatePicker
          className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
          selected={field.value ? new Date(field.value) : null}
          onChange={handleChange}
          placeholderText={label}
          dateFormat='yyyy-MM-dd'
        />
        {meta.touched && meta.error && (
          <div className='invalid-feedback'>{meta.error}</div>
        )}
      </div>
    </div>
  )
}

export default InputDate
