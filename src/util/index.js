import moment from 'moment-timezone'
import 'moment/locale/es'
moment.locale('es')
export const formatDate = (date) => {
  return moment(date).format('DD MMMM YY')
}
