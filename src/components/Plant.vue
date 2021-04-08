<template>
  <section id="about" class="plant-section">
    <v-container>
      <v-row>
        <v-col>
          <g-image alt="Prototype image" src="~/Arctostaphylos_Sunset-SunsetManzanita.png" width="300" />
        </v-col>
        <v-col sm="6" class="d-flex flex-column justify-center">
          <div v-for="page in $page.allGoogleSheet.edges" :key="page.id">
            <strong><em>{{ page.node.Scientific_Name }}</em></strong>
      -- Commonly Known as: {{ page.node.Common_Name }}
      located at: {{ page.node.Location}}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.g-image {
  border-radius: 100%;
}
</style>