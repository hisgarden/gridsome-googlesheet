<template>
  <Layout>
    <section id="plant" class="plant-section">
      <v-container>
        <v-row>
          <v-col sm="6" class="d-flex flex-column justify-center">
            <div>Image_URL: {{ $page.googleSheet.Image_URL }} </div>
            <g-image
              alt="Prototype image"
              src="~/Arctostaphylos_Sunset-SunsetManzanita.png"
              width="300"
            />
            <h3>{{ $page.googleSheet.Common_Name }}</h3>
            <div>({{ $page.googleSheet.Scientific_Name }})</div>
            <div>Description: {{ $page.googleSheet.Description }}</div>
            <div>Height: {{ $page.googleSheet.Size_height }}</div>
            <div>Width: {{ $page.googleSheet.Size_width }}</div>
            <div>Exposure: {{ $page.googleSheet.Exposure }}</div>
            <div>Water Needs: {{ $page.googleSheet.Water_Needs }}</div>
            <div>Bloom Season: {{ $page.googleSheet.Bloom_Season }}</div>
            <div>Pruning Needs: {{ $page.googleSheet.Pruning_Needs }}</div>
            <div>
              Location: {{ $page.googleSheet.Location }}-{{
                $page.googleSheet.id
              }}
            </div>
            <div>Image_URL: {{ $page.googleSheet.Image_URL }} </div>
            <div>Plant Type: {{ $page.googleSheet.Type }}</div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </Layout>
</template>

<page-query>
query Sheet($path: String!) {
  googleSheet(path: $path) {
    id
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
    Image_URL
  }
}
</page-query>

<script>
export default {}
</script>
