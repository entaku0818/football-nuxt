<template>
  <div>
    {{ message }}
    <div v-for="team in teams.teams" :key='team.id'>
        {{team.name}}
     </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'

export default Vue.extend({
  data () {
    const message: string = 'This is a message'
    return {
      message
    }
  },
  computed: {
    ...mapGetters(`Team`, ['teams'])
  },
  async fetch ({ store, params }) {
    
    await store.dispatch('Team/fetch')
  }
})
</script>