import { ApiRepositoryFactory } from '@/factories/api-repository-factory'

export default ({ $axios }, inject) => {
  const api = (repositoryName) => {
    return ApiRepositoryFactory.get(repositoryName)($axios)
  }
  inject('api', api)
}
