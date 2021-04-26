<template>
  <v-app>
    
    <Header />
    <Hero v-if="isHome" />
    <v-container fill-width class="d-sm-none d-md-flex">
      <slot />
    </v-container>
    <v-main>
    </v-main>
    <Footer />
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
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default {
  components: {
    Header,
    Hero,
    Footer,
  },
  computed: {
    isHome() {
      return this.$route.path === "/"
    },
  },
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
        { title: 'Explore', link: 'explore', icon: 'explore' }
      ]
    }
  }

}

</script>