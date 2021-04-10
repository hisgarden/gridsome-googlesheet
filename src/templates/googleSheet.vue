  
<template>
  <Layout>
      <h3>{{ $page.googleSheet.Scientific_Name }}</h3>
    <div>Common Name: {{ $page.googleSheet.Common_Name }}</div>
    <div>Description: {{ $page.googleSheet.Description }}</div>
    <div>Height: {{ $page.googleSheet.Size_height }}</div>
    <div>Width: {{ $page.googleSheet.Size_width }}</div>
    <div>Exposure: {{ $page.googleSheet.Exposure }}</div>
    <div>Water Needs: {{ $page.googleSheet.Water_Needs }}</div>
    <div>Bloom Season: {{ $page.googleSheet.Bloom_Season }}</div>
    <div>Pruning Needs: {{ $page.googleSheet.Pruning_Needs }}</div>
    <div>Location: {{ $page.googleSheet.Location }}</div>
    <div>Plant Type: {{ $page.googleSheet.Type }}</div>

  </Layout>
</template>

<page-query>
query Sheet($path: String!) {
  googleSheet (path: $path) {
    Scientific_Name
    Common_Name
    Description
    Size_height
    Size_width
    Location
    Type
    Exposure
    Water_Needs
    Bloom_Season
    Pruning_Needs  
  }
}
</page-query>

<script>
export default {

}
</script>
