// stores/useFormStore.js

import { defineStore } from "pinia";
import { useToast } from "vue-toast-notification";

const toast = useToast();

export const useFormStore = defineStore("formStore", {
  state: () => ({
    employeeList: [
      {
        name: "Adams John",
        id: 1,
      },
      {
        name: "Aaron Hank",
        id: 2,
      },
      {
        name: "Abagnale Frank",
        id: 3,
      },
      {
        name: "Abbey Edward",
        id: 4,
      },
      {
        name: "Abel Reuben",
        id: 5,
      },
      {
        name: "Abelson Hal",
        id: 6,
      },
      {
        name: "Abourezk James",
        id: 7,
      },
      {
        name: "Abrams Creighton",
        id: 8,
      },
      {
        name: "Ace Jane",
        id: 9,
      },
      {
        name: "Acton John ",
        id: 10,
      },
      {
        name: "Adams Abigail",
        id: 11,
      },
      {
        name: "Adams Douglas",
        id: 12,
      },
      {
        name: "Adams sande",
        id: 13,
      },
      {
        name: "Adams Henry",
        id: 14,
      },
    ],

    certificatesList: [
      {
        id: "CSEP",
        name: "Certified special event professional",
        employeeIds: [13, 2, 4],
      },
      {
        id: "CIA",
        name: "Certified Internal Auditor",
        employeeIds: [13, 1, 8],
      },
      {
        id: "CISA",
        name: "Certified Information Systems Auditor",
        employeeIds: [9, 6, 4, 5, 10],
      },
      {
        id: "PMITS",
        name: "Project Management in IT Security",
        employeeIds: [13, 12, 14, 8],
      },
      {
        id: "VCP5-DCV",
        name: "VMware Certified Professional 5 - Data Center Virtualization",
        employeeIds: [10, 1, 11],
      },
      {
        id: "CQE",
        name: "Quality Engineer certification",
        employeeIds: [2],
      },
    ],
    selectedUserCertificates: [],
    editingRows: [],
    selectedEmployer: "",
    visible: false,
    certificateNameValue: "",
    certificateIdValue: "",
    saveButtonClicked: false,
  }),

  actions: {
    getCertificate: function () {
      this.selectedUserCertificates = this.certificatesList.filter((certf) => {
        if (certf.employeeIds.includes(this.selectedEmployer.id)) {
          return { id: certf.id, name: certf.name };
        }
      });
    },

    openDialog: function () {
      this.visible = true;
      this.certificateIdValue = "";
      this.certificateNameValue = "";
      this.saveButtonClicked = false;
    },

    closeDialog: function () {
      this.visible = false;
      this.certificateIdValue = "";
      this.certificateNameValue = "";
      this.saveButtonClicked = false;
    },

    saveDialog: function () {
      this.saveButtonClicked = true;
      if (this.certificateIdValue.trim() && this.certificateNameValue.trim()) {
        let certificateExists = false;

        for (const certf of this.certificatesList) {
          if (certf.id === this.certificateIdValue) {
            if (certf.employeeIds.includes(this.selectedEmployer.id)) {
              toast.open({
                message: "This Employer has this certificate already",
                type: "error",
                position: "top-right",
              });
              this.visible = false;
              return;
            } else {
              certf.employeeIds.push(this.selectedEmployer.id);
              // this.getCertificate();
              certificateExists = true;
            }
          }
        }

        if (!certificateExists) {
          this.certificatesList.push({
            id: this.certificateIdValue,
            name: this.certificateNameValue,
            employeeIds: [this.selectedEmployer.id],
          });
        }

        this.getCertificate();
        this.visible = false;
        this.certificateIdValue = "";
        this.certificateNameValue = "";
        toast.open({
          message: "Certificate added successfully",
          type: "success",
          position: "top-right",
        });
      }
    },

    onDeleteCertificate: function (cirtId) {
      const certificateToDeleteFromEmplyee = this.certificatesList.find(
        (cirt) => cirt.id === cirtId
      );

      const userIdIndexToDelete =
        certificateToDeleteFromEmplyee.employeeIds.indexOf(
          this.selectedEmployer.id
        );

      certificateToDeleteFromEmplyee.employeeIds.splice(userIdIndexToDelete, 1);
      this.getCertificate();
      toast.open({
        message: "Certificate Deleted Successfully",
        type: "success",
        position: "top-right",
      });
    },
  },
});
