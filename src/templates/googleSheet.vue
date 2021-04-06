<template>
  <layout>
    <div>{{$page.googleSheet.title}}</div>
    <div>{{$page.googleSheet.body}}</div>
  </layout>
</template>

<page-query>
query Post ($path: String!) {
  googleSheet (path: $path) {
    title
    body
  }
}
</page-query>