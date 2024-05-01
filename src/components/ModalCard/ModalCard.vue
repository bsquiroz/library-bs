<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { useLibraryStore } from "@/composables/useLibraryStore";

const { isShowModalCard, handleShowModalCard } = useLibraryStore();
</script>

<template>
  <Transition>
    <section
      v-if="isShowModalCard"
      class="h-screen w-screen bg-black/80 flex justify-center items-center p-4 fixed top-0 left-0"
    >
      <Card class="flex flex-col p-4">
        <CardHeader>
          <CardTitle>Libro 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Nombre: Persona 1</p>
          <p>Numero de identidad: 1001</p>
          <p>Fecha tentiva de entrega: 01/01/01</p>
          <p>Informacion de contacto: 3136127830</p>
          <p>
            Estado del prestamo:
            <Badge class="bg-red-500">Sin entregar</Badge>
          </p>
        </CardContent>
        <Button @click="() => handleShowModalCard(false)">Volver</Button>
      </Card>
    </section>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
