<script setup lang="ts">
import FormLibrary from "./components/FormLibrary/FormLibrary.vue";
import Layout from "./components/Layout/Layout.vue";
import Header from "./components/Header/Header.vue";
import Info from "./components/Info/Info.vue";
import ModalCard from "./components/ModalCard/ModalCard.vue";
</script>

<template>
  <Layout>
    <Header />
    <section class="grid gap-4 md:grid-cols-2 mt-10">
      <FormLibrary class="md:col-span-1" />
      <Info class="md:col-span-1" />
    </section>
  </Layout>
  <ModalCard />
</template>
