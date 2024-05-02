<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import FormLibrary from "./components/FormLibrary/FormLibrary.vue";
import Layout from "./components/Layout/Layout.vue";
import Header from "./components/Header/Header.vue";
import Info from "./components/Info/Info.vue";
import ModalCard from "./components/ModalCard/ModalCard.vue";
</script>

<template>
  <Layout>
    <Header />
    <Tabs default-value="form" class="max-w-2xl m-auto mt-10">
      <TabsList class="w-full flex">
        <TabsTrigger class="flex-1" value="form"> Form prestamos </TabsTrigger>
        <TabsTrigger class="flex-1" value="info">
          Información prestamos
        </TabsTrigger>
      </TabsList>
      <TabsContent value="form">
        <FormLibrary />
      </TabsContent>
      <TabsContent value="info">
        <Info />
      </TabsContent>
    </Tabs>
  </Layout>
  <ModalCard />
</template>
