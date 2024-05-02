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

import { Calendar } from "@/components/ui/calendar";
import { useLibraryStore } from "@/composables/useLibraryStore";

const { loanBook } = useLibraryStore();
</script>

<template>
  <form class="flex flex-col gap-4">
    <h2 class="text-xl font-bold text-center">Registro de prestamo</h2>

    <div class="flex flex-col gap-4">
      <Label for="text"
        >Nombre: <span>{{ loanBook.name }}</span></Label
      >
      <Input
        type="text"
        placeholder="Nombre de la persona"
        v-model="loanBook.name"
      />
    </div>

    <div class="flex flex-col gap-4">
      <Label for="id"
        >Numero de identidad: <span>{{ loanBook.id }}</span></Label
      >
      <Input
        type="number"
        placeholder="Nombre de la persona"
        v-model="loanBook.id"
      />
    </div>

    <div class="flex flex-col gap-4">
      <Label for="book"
        >Cual libro?: <span>{{ loanBook.book }}</span></Label
      >

      <Select v-model="loanBook.book">
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
        >En caso de requerirlo donde lo podemos encontrar?:
        {{ loanBook.contact }}</Label
      >

      <RadioGroup default-value="correo" v-model="loanBook.contact">
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r1" value="correo" />
          <Label for="r1">Correo</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="r2" value="celular" />
          <Label for="r2">Celular</Label>
        </div>
      </RadioGroup>

      <Input
        v-if="loanBook.contact === 'correo'"
        type="email"
        placeholder="ej: example@correo.com"
      />
      <Input v-else type="tel" placeholder="ej: 313 612 6745" />
    </div>

    <div class="flex flex-col gap-4">
      <Label for="id"
        >Fecha tentativa de entrega: <span>{{ loanBook.deadline }}</span></Label
      >

      <Calendar
        v-model="loanBook.deadline as any"
        :weekday-format="'short'"
        class="rounded-md border self-start"
      />
    </div>

    <Button>Prestar libro</Button>
  </form>
</template>
