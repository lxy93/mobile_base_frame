<template>
  <div id="app">
    <loading v-show="loadingShow" />
    <router-view/>
  </div>
</template>

<script>
import Loading from './components/Loading'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapState(['loadingShow'])
  }
}
</script>
<style lang="less">

</style>
