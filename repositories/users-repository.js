const resourse = 'v1/users'

export default ($axios) => ({
  readAll() {
    return $axios.$get(`${resourse}`)
  },
  read(id) {
    return $axios.$get(`${resourse}/${id}`)
  },
})
