<template>
  <section id="about" class="plant-section">
    <v-container>

      <v-row dense>
        <v-col>
          <g-image alt="Prototype image" src="~/Arctostaphylos_Sunset-SunsetManzanita.png" width="300" />
        </v-col>
        <v-col sm="6" class="d-flex flex-column justify-center">
          <div v-for="page in $page.allGoogleSheet.edges" :key="page.node.Scientific_Name">


          <v-card
            max-width="400"
            class="mx-auto"
            outlined
          >
<!--             <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
            >
            
            </v-img> -->
            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                <v-avatar
                    class="ma-3"
                    size="194"
                    tile
                  >
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                </v-avatar>
                </div>

                icon_native, icon_bee
              </div>
 
                <v-card-title>{{ page.node.Common_Name }}</v-card-title>
                <v-card-subtitle>({{ page.node.Scientific_Name }})</v-card-subtitle>
               <v-card-text>
                  {{ page.node.Description }}
              </v-card-text>
              <v-card-actions>
                
                <v-btn
                  color="success"
                  outlined
                >
                  <v-icon></v-icon>
                  {{ page.node.Location}}
                </v-btn>
            </v-card-actions>
          </v-card>
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