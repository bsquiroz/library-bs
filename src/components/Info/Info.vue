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

import { Badge } from "@/components/ui/badge";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLibraryStore } from "@/composables/useLibraryStore";

const { handleSelectLoanBook, handleShowModalCard, loanBooks } =
  useLibraryStore();
</script>

<template>
  <section class="flex flex-col gap-4">
    <h2 class="text-xl font-bold text-center">Informacion de prestamos</h2>
    <div class="flex flex-col gap-4">
      <Label for="text">Nombre del libro o Id</Label>
      <Input type="text" placeholder="ej: libro 1 or 1001" />
    </div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead> Libro </TableHead>
          <TableHead>Id persona</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead class="text-center">
            <i class="bx bxs-info-circle text-primary text-2xl"></i>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="loanBook in loanBooks" :key="loanBook.id">
          <TableCell> {{ loanBook.name }} </TableCell>
          <TableCell>{{ loanBook.id }}</TableCell>
          <TableCell>
            <Badge v-if="loanBook.state" class="bg-green-500">Entregado</Badge>
            <Badge v-else class="bg-red-500">Sin entregar</Badge>
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
</template>
