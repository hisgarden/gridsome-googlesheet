<template>
  <section id="about" class="plant-section">
    <v-container>

      <v-row dense>
        <v-col>
          <g-image alt="Prototype image" src="~/Arctostaphylos_Sunset-SunsetManzanita.png" width="300" />
        </v-col>
        <v-col sm="6" >
          <div v-for="page in $page.allGoogleSheet.edges" :key="page.node.Scientific_Name">


          <v-card
            max-width="400"
            class="mx-auto"
            elevation="4"
            shaped
          >

            <div class="d-flex flex-no-wrap justify-space-between">
                
                <v-avatar
                    class="ma-3"
                    size="194"
                    tile
                >
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" alt="page.node.Scientific_Name"></v-img>
                </v-avatar>
                
                
                icon_native, icon_bee, icon_water_need, icon_exposure
                 
            </div>
 
                <v-card-title>{{ page.node.Common_Name }}</v-card-title>
                <v-card-subtitle>({{ page.node.Scientific_Name }})</v-card-subtitle>
               <v-card-text>
                  {{ page.node.Description }}<br>
                  Located at: {{ page.node.Location}}
              </v-card-text>
             
              <v-card-actions>
                <v-btn
                  text
                  color="success"
                  outlined
                >
                  <v-icon>mdi-magnify</v-icon>Learn more
                </v-btn>  
                <v-spacer></v-spacer>
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
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