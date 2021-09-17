<template>
  <div class="landing">
    <div class="container-fluid banner">

    </div>
    <div class="container py-4">
      <h1>Landing</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Landing extends Vue {}
</script>
