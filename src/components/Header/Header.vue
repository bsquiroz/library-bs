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
      <DrawerContent>
        <div class="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle class="text-center">Historial</DrawerTitle>
          </DrawerHeader>

          <Table>
            <TableHeader>
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
              <TableRow>
                <TableCell> Libro 1 </TableCell>
                <TableCell>1001</TableCell>
                <TableCell>
                  <Badge class="bg-red-500">Sin entregar</Badge>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Libro 2 </TableCell>
                <TableCell>1002</TableCell>
                <TableCell>
                  <Badge class="bg-green-500">Entregado</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <DrawerFooter>
            <DrawerClose as-child>
              <Button variant="outline"> Cerrar </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  </header>
</template>
