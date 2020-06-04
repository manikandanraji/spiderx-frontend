<template>
  <form @submit.prevent="handleSearch">
    <input v-model="searchterm" type="text" placeholder="Mad Max" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchterm: '',
    }
  },
  methods: {
    handleSearch() {
      const term = this.cleanSearchterm()
      this.$router.push({
        name: 'search-result',
        params: { searchterm: term },
      })
    },
    cleanSearchterm() {
      let strList = []

      for (let i = 0; i < this.searchterm.length; i++) {
        const ch = this.searchterm[i]
        if (ch === ' ') {
          strList.push('-')
        } else {
          strList.push(ch)
        }
      }

      return strList.join('')
    },
  },
}
</script>

<style scoped>
form {
  margin: 2rem 0;
}

input {
  padding: 0.6rem 1rem;
  width: 300px;
  background: var(--dark);
  color: var(--white);
  letter-spacing: 1.2px;
  border-radius: 4px;
  border: 2px solid var(--tertiaryColor);
}

input:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
