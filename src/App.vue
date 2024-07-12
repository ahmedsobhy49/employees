<template>
  <div
    class="flex justify-start flex-col items-center gap-20 mt-10 h-screen text-center"
  >
    <Form />
    <DataTable />
  </div>
</template>

<script setup>
import Form from "./components/Form.vue";
import DataTable from "./components/DataTable.vue";
</script>
