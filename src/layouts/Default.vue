<template>
  <v-app>
    
    <header class="header">
    <div>
      <v-app-bar>
        <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- mobile menu button -->
        <span class="hidden-sm-and-up">
          <v-btn
            @click.stop="drawer = !drawer"
          >
            Menu
          </v-btn>
        </span>

        <!-- desktop & tablet menu -->
        <v-toolbar-items class="hidden-xs-only">
          <v-btn to="/" text>
            <v-icon>mdi-home</v-icon>
            Home
          </v-btn>
          <v-btn to="about" text>
            <v-icon>mdi-contact</v-icon>
            About
          </v-btn>
          <v-btn to="cart" text>
            <v-icon>mdi-cart</v-icon>
            Cart
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        right
      >
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
          >
            <v-list-item-icon>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    </header>
    <v-main>
      <slot/>
    </v-main>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>{{ $static.metadata.siteName }}</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'About', link: 'about', icon: 'about' },
        { title: 'Cart', link: 'cart', icon: 'cart' }
      ]
    }
  }

}

</script>