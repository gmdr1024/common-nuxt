<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    show-select
    class="elevation-1"
  >
    <template #[`item.created_at`]="{ item }">
      {{ $dateFormat(item.created_at) }}
    </template>
    <template #[`item.updated_at`]="{ item }">
      {{ $dateFormat(item.updated_at) }}
    </template>
    <template #[`item.deleted_at`]="{ item }">
      {{ $dateFormat(item.deleted_at) }}
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'ログインID', value: 'login_id' },
        { text: '名前', value: 'name' },
        { text: 'メールアドレス', value: 'email' },
        { text: '作成日時', value: 'created_at' },
        { text: '更新日時', value: 'updated_at' },
        { text: '更新日時', value: 'deleted_at' },
      ],
      users: [],
    }
  },
  async created() {
    this.users = await this.$api('users').readAll()
  },
}
</script>
