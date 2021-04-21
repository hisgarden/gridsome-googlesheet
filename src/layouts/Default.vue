<template>
  <v-app>
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <v-main>
      <slot/>
    </v-main>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>{{ $static.metadata.siteName }}</strong>
      </v-col>
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
