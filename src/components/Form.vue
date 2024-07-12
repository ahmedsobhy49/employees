<template>
  <div>
    <div class="card flex justify-content-center">
      <Dropdown
        v-model="formStore.selectedEmployer"
        :options="formStore.employeeList"
        filter
        optionLabel="name"
        placeholder="Select an Employer"
        class="w-full md:w-14rem"
        :pt="{
          panel: 'bg-white shadow-lg',
        }"
      >
      </Dropdown>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "../stores/useFormStore";
import { watch } from "vue";

const formStore = useFormStore();

watch([() => formStore.selectedEmployer], () => {
  formStore.getCertificate();
});
</script>
