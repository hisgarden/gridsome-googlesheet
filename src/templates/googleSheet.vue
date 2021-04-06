<template>
  <layout>
      <h3>Test Route</h3>
    <div>{{ $page.googleSheet.Scientific_Name }}</div>
    <!--<div>{{ $page.googleSheet.Common_Name }}</div>-->
  </layout>
</template>

<page-query>
query Sheet($path: String!) {
  googleSheet (path: $path) {
    Scientific_Name
  }
}
</page-query>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
