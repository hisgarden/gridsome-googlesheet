<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>
    <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
      {{ page.node.Scientific_Name }}
    </div>

  </Layout>
</template>

<!-- Always put page-query between <template> and <script> -->
<page-query>
query {
  allGoogleSheet {
    edges {
      node {
        id
        title
        Scientific_Name
        Common_Name
        Description
        Bloom_Season_
        Water_Needs
        Exposure
        Pruning_Needs
        Location
        Size__width_
        Size__height__
        Type
      }
    }
  } 
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
