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
                <TableRow>
                  <TableCell> juan </TableCell>
                  <TableCell>1001</TableCell>
                  <TableCell> libro 1 </TableCell>
                  <TableCell> 313.. </TableCell>
                  <TableCell>01/01/01</TableCell>
                  <TableCell>
                    <Badge class="bg-red-500">Sin entregar</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> pedro </TableCell>
                  <TableCell>1002</TableCell>
                  <TableCell> libro 2 </TableCell>
                  <TableCell> 312.. </TableCell>
                  <TableCell>02/01/01</TableCell>
                  <TableCell>
                    <Badge class="bg-green-500">Entregado</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> juan </TableCell>
                  <TableCell>1001</TableCell>
                  <TableCell> libro 1 </TableCell>
                  <TableCell> 313.. </TableCell>
                  <TableCell>01/01/01</TableCell>
                  <TableCell>
                    <Badge class="bg-red-500">Sin entregar</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> pedro </TableCell>
                  <TableCell>1002</TableCell>
                  <TableCell> libro 2 </TableCell>
                  <TableCell> 312.. </TableCell>
                  <TableCell>02/01/01</TableCell>
                  <TableCell>
                    <Badge class="bg-green-500">Entregado</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> juan </TableCell>
                  <TableCell>1001</TableCell>
                  <TableCell> libro 1 </TableCell>
                  <TableCell> 313.. </TableCell>
                  <TableCell>01/01/01</TableCell>
                  <TableCell>
                    <Badge class="bg-red-500">Sin entregar</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> pedro </TableCell>
                  <TableCell>1002</TableCell>
                  <TableCell> libro 2 </TableCell>
                  <TableCell> 312.. </TableCell>
                  <TableCell>02/01/01</TableCell>
                  <TableCell>
                    <Badge class="bg-green-500">Entregado</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> juan </TableCell>
                  <TableCell>1001</TableCell>
                  <TableCell> libro 1 </TableCell>
                  <TableCell> 313.. </TableCell>
                  <TableCell>01/01/01</TableCell>
                  <TableCell>
                    <Badge class="bg-red-500">Sin entregar</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> pedro </TableCell>
                  <TableCell>1002</TableCell>
                  <TableCell> libro 2 </TableCell>
                  <TableCell> 312.. </TableCell>
                  <TableCell>02/01/01</TableCell>
                  <TableCell>
                    <Badge class="bg-green-500">Entregado</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> juan </TableCell>
                  <TableCell>1001</TableCell>
                  <TableCell> libro 1 </TableCell>
                  <TableCell> 313.. </TableCell>
                  <TableCell>01/01/01</TableCell>
                  <TableCell>
                    <Badge class="bg-red-500">Sin entregar</Badge>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell> pedro </TableCell>
                  <TableCell>1002</TableCell>
                  <TableCell> libro 2 </TableCell>
                  <TableCell> 312.. </TableCell>
                  <TableCell>02/01/01</TableCell>
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
          </section>
        </div>
      </DrawerContent>
    </Drawer>
  </header>
</template>
