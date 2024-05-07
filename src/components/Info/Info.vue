<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLibraryStore } from "@/composables/useLibraryStore";
import { computed } from "vue";

const { handleSelectLoanBook, handleShowModalCard, loanBooks } =
  useLibraryStore();

const avaliableLoanBooks = computed(() =>
  loanBooks.value.filter((loanbook) => !loanbook.history)
);
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2 class="text-xl font-bold text-center">Informacion de prestamos</h2>
    <p v-if="!avaliableLoanBooks.length" class="text-center">
      No hay prestamos para mostrar.
    </p>
    <section v-else>
      <div class="flex flex-col gap-4">
        <Label for="text">Nombre del libro o Id</Label>
        <Input type="text" placeholder="ej: libro 1 or 1001" />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead> Libro </TableHead>
            <TableHead>Id persona</TableHead>
            <TableHead>historial</TableHead>
            <TableHead class="text-center">
              <i class="bx bxs-info-circle text-primary text-2xl"></i>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="loanBook in avaliableLoanBooks" :key="loanBook.id">
            <TableCell> {{ loanBook.name }} </TableCell>
            <TableCell>{{ loanBook.id }}</TableCell>
            <TableCell>
              <pre>{{ loanBook.history }}</pre>
            </TableCell>
            <TableCell class="text-center">
              <Button
                variant="secondary"
                v-on:click="
                  () => {
                    handleSelectLoanBook(loanBook.id);
                    handleShowModalCard(true);
                  }
                "
                >Ver detalles</Button
              >
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  </section>
</template>
