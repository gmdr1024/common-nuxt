import UsersRepository from '@/repositories/users-repository'

const repositories = {
  users: UsersRepository,
}

export const ApiRepositoryFactory = {
  get: (repositoryName) => repositories[repositoryName],
}
