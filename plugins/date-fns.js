import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'
import parseISO from 'date-fns/parseISO'

export default ({ app }, inject) => {
  inject('dateFns', (date) => {
    return format(parseISO(date), 'yyyy-MM-dd hh:mm:ss', { locale: ja })
  })
}
