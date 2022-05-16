<template>
  <div>
    <div class="p-datatable-header">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText placeholder=" Search" />
      </span>
    </div>
    <TabMenu :model="items" />
    <div class="p-button-display">
      <Button label="Delete" icon="pi pi-trash" @click="openBasic" />
      <Dialog
        header="Delete Instance"
        v-model:visible="displayBasic"
        :style="{ width: '50vw' }"
      >
        <p>
          Performing this action will completely remove the instance and you
          will not be able to recover it. Do you want to proceed
        </p>
        <template #footer>
          <Button
            label="Cancel"
            icon="pi pi-times"
            @click="closeBasic"
            class="p-button-text"
          />
          <Button
            label="Delete Instance"
            icon="pi pi-check"
            @click="closeBasic"
            autofocus
          />
        </template>
      </Dialog>

      <Button
        label="Deploy"
        icon="pi pi-external-link"
        @click="visibleRight = true"
      />
      <Sidebar
        class="p-sidebar-md"
        v-model:visible="visibleRight"
        :baseZIndex="100"
        position="right"
      >
        <div>
          <label for="Used By">Used By</label><br />
          <Dropdown
            placeholder="Jason Stone"
            v-model="selectedUsers"
            :options="user"
            optionLabel="name"
            class="p-dropdown-sm"
          />
        </div>
        <br />

        <div>
          <label for="Branch">Branch</label><br />
          <InputText
            type="text"
            placeholder=" Enter branch name"
            class="p-inputtext-sm"
          ></InputText>
        </div>
        <br />
        <div>
          <label for="reason">Reason for Deployment</label><br />
          <Textarea v-model="value1" rows="3" cols="50" />
        </div>
        <Button
          @click="visibleRight = false"
          label="Cancel"
          class="p-button-raised p-button-text p-button-plain"
        />

        <Button label="Deploy Instance" />
      </Sidebar>
    </div>

    <div class="p-Inputtext">
      <h5>Alianz Arena - second</h5>
      <h6>Team : <strong>Awesome Team</strong></h6>
      <h6>Instance ID :<strong>#INS -F1 -2984</strong></h6>
      <h6>Branch :<strong>--</strong></h6>
    </div>

    <div class="p-in">
      <h5>Usage History</h5>

      <Accordion :multiple="true" :activeIndex="[0]">
        <AccordionTab header="Jason Stone">
          <p>
            From: 27 Aug, 2021 &ensp; 3:14 PM &emsp; Branch: dev_branch_1
            &emsp;&emsp;&emsp; Reason for Deployment: Deployment was done to
            test the user story changes &emsp;&emsp; 2H 30M <br />
            To: 27 Aug, 2021 &ensp; 6:23 PM &emsp;&emsp; Deployed by: Jason
            Stone
          </p>
        </AccordionTab>
        <AccordionTab header="Jason Stone">
          <p>
            From: 27 Aug, 2021 &ensp; 3:14 PM &emsp; Branch: dev_branch_1
            &emsp;&emsp;&emsp; Reason for Deployment: Deployment was done to
            test the user story changes &emsp;&emsp; 2H 30M <br />
            To: 27 Aug, 2021 &ensp; 6:23 PM &emsp;&emsp; Deployed by: Jason
            Stone
          </p>
        </AccordionTab>
        <AccordionTab header="Jason Stone">
          <p>
            From: 27 Aug, 2021 &ensp; 3:14 PM &emsp; Branch: dev_branch_1
            &emsp;&emsp;&emsp; Reason for Deployment: Deployment was done to
            test the user story changes &emsp;&emsp; 2H 30M <br />
            To: 27 Aug, 2021 &ensp; 6:23 PM &emsp;&emsp; Deployed by: Jason
            Stone
          </p>
        </AccordionTab>
        <AccordionTab header="Jason Stone">
          <p>
            From: 27 Aug, 2021 &ensp; 3:14 PM &emsp; Branch: dev_branch_1
            &emsp;&emsp;&emsp; Reason for Deployment: Deployment was done to
            test the user story changes &emsp;&emsp; 2H 30M <br />
            To: 27 Aug, 2021 &ensp; 6:23 PM &emsp;&emsp; Deployed by: Jason
            Stone
          </p>
        </AccordionTab>
        <AccordionTab header="Jason Stone">
          <p>
            From: 27 Aug, 2021 &ensp; 3:14 PM &emsp; Branch: dev_branch_1
            &emsp;&emsp;&emsp; Reason for Deployment: Deployment was done to
            test the user story changes &emsp;&emsp; 2H 30M <br />
            To: 27 Aug, 2021 &ensp; 6:23 PM &emsp;&emsp; Deployed by: Jason
            Stone
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script>
import UsageHistory from "@/service/UsageHistory";

export default {
  data() {
    return {
      selectedUsers: null,
      displayBasic: false,
      displayBasic2: false,
      position: "center",

      usage: [],
      usageHistory: null,
      visibleRight: false,
      user: [
        {
          name: "Jason Stone",
        },
        { name: "Gianluigi Donnarumma" },
      ],
      items: [
        {
          label: "Instances",
          icon: "pi pi-fw pi-home",
          class: "p-highlight",
          to: "/instance",
        },
        {
          label: "Teams",
          icon: "pi pi-fw pi-calendar",
          to: "/team",
        },
      ],
    };
  },
  created() {
    this.usageHistory = new UsageHistory();
  },
  mounted() {
    this.usageHistory.getPosts().then((data) => (this.usage = data));
  },
  methods: {
    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },
    openBasic2() {
      this.displayBasic2 = true;
    },
    closeBasic2() {
      this.displayBasic2 = false;
    },
  },
};
</script>

<style scoped lang="scss">
.p-dropdown {
  width: 14rem;
  text-align: right;
}
::v-deep(.p-datatable.p-datatable-customers) {
  .p-datatable-header {
    padding: 1rem;
    text-align: right;
    font-size: 1.5rem;
  }
  .m-0 {
    text-align: left;
  }
  .p-paginator {
    padding: 1rem;
  }

  .p-datatable-thead > tr > th {
    text-align: left;
  }

  .p-datatable-tbody > tr > td {
    cursor: auto;
  }
}
.field {
  display: block;
}
.p-in {
  text-align: left;
}
.p-button {
  margin-right: 1.5rem;
  margin-left: 0.1rem;
}
.p-dropdown {
  margin-right: 0.5rem;
}
.p-button {
  margin: 0.3rem 0.5rem;
  min-width: 10rem;
}
.p-button-display {
  padding: 1rem;
  text-align: right;
  font-size: 1.5rem;
}
.p-sidebar-md {
  width: fit-content;
  height: fit-content;
}
.p-button1 {
  text-align: left;
  border: 0;

  color: white;
  width: 120px;
  height: 50px;
  top: 5px;
  position: relative;
}
::v-deep(.p-progressbar) {
  height: 0.5rem;
  background-color: #d8dadc;

  .p-progressbar-value {
    background-color: #607d8b;
  }
}
.p-datatable-tbody > tr > td {
  cursor: auto;
}
.p-datatable-header {
  padding: 1rem;
  text-align: right;
  font-size: 1.5rem;
}
.p-Inupttext {
  padding: 1rem;
  text-align: left;
  font-size: 1.5rem;
}
</style>