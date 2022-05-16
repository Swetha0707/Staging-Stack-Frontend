<template>
  <div>
    <DataTable
      :value="data"
      :paginator="true"
      class="p-datatable-customers"
      :rows="10"
      :rowHover="true"
      :rowsPerPageOptions="[10, 20, 30]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
      :globalFilterFields="['name', 'id', 'user', 'branch', 'status']"
      responsiveLayout="scroll"
    >
      <template #header>
        <div class="flex justify-content-center align-items-center">
          <h5 class="m-0">All Instances</h5>

          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters['global'].value"
              placeholder=" Search"
            /> </span
          ><span>
            <Dropdown
              v-model="selectedTeams"
              :options="team"
              optionLabel="name"
              placeholder="Awesome Team"
          /></span>
        </div>

        <Sidebar
          class="p-sidebar-md"
          v-model:visible="visibleRight"
          :baseZIndex="100"
          position="right"
        >
          <h6>Create New Instance</h6>
          <br />
          <div>
            <label for="Instance Name">Instance Name</label><br />
            <InputText
              type="text"
              class="p-inputtext-sm"
              placeholder=" Enter Instance Name"
            ></InputText>
          </div>
          <br />

          <div>
            <label for="Instance Id">Instance ID</label><br />
            <InputText
              type="text"
              class="p-inputtext-sm"
              placeholder=" Enter Instance ID"
            ></InputText>
          </div>
          <br />
          <div>
            <label for="Team">Team</label><br />
            <Dropdown
              placeholder="Select Team from DropDown"
              class="p-dropdown-sm"
              disabled
            />
          </div>
          <br />
          <div>
            <label for="Usage">Usage Type</label><br />
            <Dropdown
              placeholder="Select usage type from DropDown"
              class="p-dropdown-sm"
              disabled
            />
          </div>
          <br />
          <div>
            <label for="State">State</label><br />
            <InputText
              type="text"
              placeholder=" Available"
              class="p-inputtext-sm"
              disabled
            ></InputText>
          </div>
          <br />
          <Button
            @click="visibleRight = false"
            label="Cancel"
            class="p-button-raised p-button-text p-button-plain"
          />

          <Button label="Create Instance" />
        </Sidebar>

        <TabMenu :model="items" /><br />
        <span class="p-buttonset"></span>
        <Button
          icon="pi pi-plus "
          label="New Instance"
          @click="visibleRight = true"
          class="p-button1"
        />
      </template>
      <Column field="name" header="Instance Name"></Column>
      <Column field="id" header="Instance ID"></Column>
      <Column field="user" header="User"></Column>
      <Column field="branch" header="Branch"></Column>
      <Column
        field="status"
        :showFilterMatchModes="false"
        style="min-width: 10rem"
        header="Status"
      >
        <template #body="{ data }">
          <ProgressBar :value="data.activity" :showValue="false" />
        </template>
        <template #filter="{ filterModel }">
          <Slider v-model="filterModel.value" range class="m-3"></Slider>
          <div class="flex align-items-center justify-content-center px-2">
            <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
            <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
          </div>
        </template></Column
      >
    </DataTable>
  </div>
</template>

<script>
import CustomerService from "@/service/CustomerService";
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
  data() {
    return {
      data: [],
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        id: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        user: { value: null, matchMode: FilterMatchMode.IN },
        branch: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
        },
        status: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      },
      customerService: null,
      visibleRight: false,
      selectedTeams: null,
      team: [
        { name: "Awesome Team" },
        { name: "Development Team" },
        { name: "No Team" },
      ],
      items: [
        {
          label: "Instances",
          icon: "pi pi-fw pi-home",
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
    this.customerService = new CustomerService();
  },
  mounted() {
    this.customerService.getPosts().then((data) => (this.data = data));
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
    text-align: center;
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
.p-button {
  margin-right: 1.5rem;
  margin-left: 0.1rem;
}
.p-dropdown {
  margin-right: 0.5rem;
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
</style>