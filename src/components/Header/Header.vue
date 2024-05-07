<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { computed } from "vue";
import { useLibraryStore } from "@/composables/useLibraryStore";

import { formatDate } from "@/helpers/formatDate";

const { loanBooks } = useLibraryStore();

const historyLoanBooks = computed(() =>
  loanBooks.value.filter((loanbook) => loanbook.history)
);
</script>

<template>
  <header class="flex items-center justify-between">
    <a href="#" class="uppercase font-extrabold"
      >Library <span class="text-primary">BS</span></a
    >

    <Drawer>
      <DrawerTrigger as-child>
        <Button variant="outline">
          <i class="bx bx-history text-primary text-2xl cursor-pointer"></i>
        </Button>
      </DrawerTrigger>
      <DrawerContent class="p-4">
        <div class="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle class="text-center">Historial</DrawerTitle>
          </DrawerHeader>

          <section class="flex flex-col gap-4">
            <div class="flex flex-col gap-4">
              <Label for="text">Buscar coincidencias</Label>
              <Input type="text" placeholder="..." />
            </div>

            <Table customClass="max-h-[500px] scrollbar-webkit scrollbar-thin">
              <TableHeader class="sticky top-0 bg-background">
                <TableRow>
                  <TableHead> Nombre </TableHead>
                  <TableHead>Id persona</TableHead>
                  <TableHead> Libro </TableHead>
                  <TableHead> Contacto </TableHead>
                  <TableHead> Fecha a entregar </TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow
                  v-for="loanbook in historyLoanBooks"
                  :key="loanbook.id"
                >
                  <TableCell> {{ loanbook.name }} </TableCell>
                  <TableCell>{{ loanbook.id }}</TableCell>
                  <TableCell> {{ loanbook.book }} </TableCell>
                  <TableCell> {{ loanbook.contact }} </TableCell>
                  <TableCell>{{ formatDate(loanbook.deadline) }}</TableCell>
                  <TableCell>
                    <Badge v-if="!loanbook.state" class="bg-red-500"
                      >Sin entregar</Badge
                    >
                    <Badge v-else class="bg-green-500">Entregado</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <DrawerFooter>
              <DrawerClose as-child>
                <Button variant="outline"> Cerrar </Button>
              </DrawerClose>
            </DrawerFooter>
          </section>
        </div>
      </DrawerContent>
    </Drawer>
  </header>
</template>
