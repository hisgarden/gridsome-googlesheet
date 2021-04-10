<template>
  <Layout>
    <About />
    <Plant />



  </Layout>
</template>

<!-- Always put page-query between <template> and <script> -->
<page-query>
query {
  allGoogleSheet {
    edges {
      node {
        id
        Scientific_Name
        Common_Name
        Description
        Bloom_Season
        Water_Needs
        Exposure
        Pruning_Needs
        Location
        Size_width
        Size_height
        Type
      }
    }
  } 
}
</page-query>

<script>
import About from "@/components/About.vue"
import Plant from "@/components/Plant.vue"
//import Card from "@/components/Card.vue"

export default {
  metaInfo: {
    title: 'Hello, UC Master Gardeners!'
  },
  components: {
    About,
    Plant,
    //Card
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
