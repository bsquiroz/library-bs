<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { useLibraryStore } from "@/composables/useLibraryStore";

import { formatDate } from "@/helpers/formatDate";

const {
  isShowModalCard,
  handleShowModalCard,
  handleSelectLoanBook,
  selectLoanBook,
  handleChangeLoanBookHistory,
} = useLibraryStore();
</script>

<template>
  <Transition>
    <section
      v-if="isShowModalCard"
      class="h-screen w-screen bg-black/80 flex justify-center items-center p-4 fixed top-0 left-0"
    >
      <Card class="flex flex-col p-4">
        <CardHeader>
          <CardTitle>{{ selectLoanBook?.book }}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Nombre: {{ selectLoanBook?.name }}</p>
          <p>Numero de identidad: {{ selectLoanBook?.id }}</p>
          <p>
            Fecha tentativa de entrega:
            {{ formatDate(selectLoanBook?.deadline) }}
          </p>
          <p>Informacion de contacto: {{ selectLoanBook?.contact }}</p>
          <p>
            Estado del prestamo:
            <Badge v-if="!selectLoanBook?.state" class="bg-red-500"
              >Sin entregar</Badge
            >
            <Badge v-else class="bg-green-500">Entregado</Badge>
          </p>
        </CardContent>

        <div class="flex gap-4 flex-wrap">
          <Button
            @click="handleChangeLoanBookHistory(selectLoanBook?.id, true)"
            class="flex-1"
            variant="outline"
            >Marcar como entregado</Button
          >
          <Button
            class="flex-1"
            variant="secondary"
            @click="handleChangeLoanBookHistory(selectLoanBook?.id)"
            >Mover a historial</Button
          >
          <Button
            class="flex-1"
            @click="
              () => {
                handleShowModalCard(false);
                handleSelectLoanBook();
              }
            "
            >Volver</Button
          >
        </div>
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
