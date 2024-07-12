<template>
  <div>
    <div class="card p-fluid">
      <h1 v-if="!formStore.selectedEmployer" class="font-bold text-lg">
        please select an employer to see his certificates
      </h1>

      <DataTable
        v-if="formStore.selectedEmployer"
        v-model:editingRows="formStore.editingRows"
        :value="formStore.selectedUserCertificates"
        editMode="row"
        dataKey="id"
        @row-edit-save="formStore.onRowEditSave"
        :pt="{
          table: { style: 'min-width: 50rem' },
          column: {
            bodycell: ({ state }) => ({
              style:
                state['d_editing'] &&
                'padding-top: 0.6rem; padding-bottom: 0.6rem',
            }),
          },
        }"
      >
        <template #header>
          <div class="flex justify-between items-center">
            <h1>{{ formStore.selectedEmployer.name }} Certificates</h1>

            <div class="card flex justify-content-center">
              <Button
                label="Add More Certificates "
                @click="formStore.openDialog"
              />
              <Dialog
                v-model:visible="formStore.visible"
                modal
                header="Add New Certificate"
                :style="{ width: '25rem' }"
                :pt="{
                  root: 'bg-white',
                }"
              >
                <div class="flex items-center justify-between gap-3 mb-3">
                  <label for="certificateName" class="font-semibold w-6rem"
                    >Certificate Name</label
                  >
                  <InputText
                    id="certificateName"
                    class="flex-auto"
                    autocomplete="off"
                    v-model="formStore.certificateNameValue"
                  />
                </div>
                <div class="flex items-center gap-10 mb-5">
                  <label for="certificateId" class="font-semibold w-6rem"
                    >Certificate Id</label
                  >
                  <InputText
                    id="certificateId"
                    class="flex-auto"
                    autocomplete="off"
                    v-model="formStore.certificateIdValue"
                  />
                </div>
                <div class="flex justify-content-end gap-2 mb-3">
                  <Button
                    type="button"
                    label="Cancel"
                    @click="formStore.closeDialog"
                  ></Button>
                  <Button
                    type="button"
                    label="Save"
                    @click="formStore.saveDialog"
                  ></Button>
                </div>
                <div
                  v-if="
                    formStore.saveButtonClicked &&
                    (!formStore.certificateNameValue ||
                      !formStore.certificateIdValue)
                  "
                >
                  <p class="text-red-600 text-center">
                    {{
                      `You Should Provide ${
                        !formStore.certificateNameValue
                          ? "certificate Name"
                          : "certificate Id"
                      }`
                    }}
                  </p>
                </div>
                <div
                  v-if="
                    formStore.saveButtonClicked &&
                    (!formStore.certificateNameValue.trim() ||
                      !formStore.certificateIdValue.trim())
                  "
                >
                  <p class="text-red-600 text-center">
                    You Should not Provide Empty Values
                  </p>
                </div>
              </Dialog>
            </div>
          </div>
        </template>
        <Column field="id" header="certificate ID" style="width: 20%"> </Column>
        <Column field="name" header="certificate Name" style="width: 20%">
        </Column>
        <Column header="DELETE" style="width: 20%">
          <template #body="rowData">
            <Button
              icon="pi pi-trash"
              @click="formStore.onDeleteCertificate(rowData.data.id)"
            ></Button>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "../stores/useFormStore";

const formStore = useFormStore();
</script>

<style lang="scss" scoped></style>
