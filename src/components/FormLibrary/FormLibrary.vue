<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";

import { type Ref, ref } from "vue";

import {
  type DateValue,
  getLocalTimeZone,
  today,
} from "@internationalized/date";
import { Calendar } from "@/components/ui/calendar";

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;
</script>

<template>
  <form class="flex flex-col gap-4">
    <h2 class="text-xl font-bold text-center">Registro de prestamo</h2>

    <div class="flex flex-col gap-4">
      <Label for="text">Nombre</Label>
      <Input type="text" placeholder="Nombre de la persona" />
    </div>

    <div class="flex flex-col gap-4">
      <Label for="id">Numero de identidad</Label>
      <Input type="number" placeholder="Nombre de la persona" />
    </div>

    <div class="flex flex-col gap-4">
      <Label for="book">Cual libro?</Label>

      <Select>
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Libros disponibles" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Libros</SelectLabel>
            <SelectItem value="libro 1"> Libro 1 </SelectItem>
            <SelectItem value="libro 2"> Libro 2 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div class="flex flex-col gap-4">
      <Label for="book"
        >En caso de requerirlo donde lo podemos encontrar?</Label
      >

      <RadioGroup default-value="comfortable">
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r1" value="default" />
          <Label for="r1">Correo</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r2" value="comfortable" />
          <Label for="r2">Celular</Label>
        </div>
      </RadioGroup>

      <Input type="text" placeholder="..." />
    </div>

    <div class="flex flex-col gap-4">
      <Label for="id">Fecha tentativa de entrega</Label>

      <Calendar
        v-model="value"
        :weekday-format="'short'"
        class="rounded-md border self-start"
      />
    </div>

    <Button>Prestar libro</Button>
  </form>
</template>
