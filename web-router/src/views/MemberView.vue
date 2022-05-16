<template>
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
        Performing this action will completely remove the member and you will
        not be able to recover it. Do you want to proceed
      </p>
      <template #footer>
        <Button
          label="Cancel"
          icon="pi pi-times"
          @click="closeBasic"
          class="p-button-text"
        />
        <Button
          label="Delete Member"
          icon="pi pi-check"
          @click="closeBasic"
          autofocus
        />
      </template>
    </Dialog>

    <Button
      label="View All Instances"
      icon="pi pi-external-link"
      @click="goInstance()"
    />
    <Button label="New Member" icon="pi pi-plus" @click="visibleRight = true" />
    <Sidebar
      class="p-sidebar-md"
      v-model:visible="visibleRight"
      :baseZIndex="100"
      position="right"
    >
      <h6>Create New Member</h6>
      <br />
      <div>
        <label for="Member Name"> Name</label><br />
        <InputText
          type="text"
          class="p-inputtext-sm"
          placeholder=" Enter member name"
        ></InputText>
      </div>
      <br />
      <div>
        <label for="Email Id">E-mail Id</label><br />
        <InputText
          type="email"
          class="p-inputtext-sm"
          placeholder=" Enter member email id"
        ></InputText>
      </div>
      <br />
      <div>
        <label for="Team">Team</label><br />
        <Dropdown
          placeholder="Awesome team"
          v-model="selectedTeams"
          :options="team"
          optionLabel="name"
          class="p-dropdown-sm"
          disabled
        />
      </div>
      <br />

      <div>
        <label for="Role">Role</label><br />
        <Dropdown
          placeholder=" Select member role"
          v-model="selectedRoles"
          :options="role"
          optionLabel="level"
          class="p-inputtext-sm"
        ></Dropdown>
      </div>
      <br />
      <div>
        <label for="Permission Level">Permission Level</label><br />
        <Dropdown
          placeholder=" Select member permission level"
          v-model="selectedLevels"
          :options="permission"
          optionLabel="permissionlevel"
          class="p-inputtext-sm"
        ></Dropdown>
      </div>
      <br />
      <Button
        @click="visibleRight = false"
        label="Cancel"
        class="p-button-raised p-button-text p-button-plain"
      />

      <Button label="Create Member" />
    </Sidebar>
  </div>
  <div class="p-Inputtext">
    <h5><strong>Awesome Team</strong></h5>
    <h6>Owner : &emsp;<strong>Jason Stone</strong></h6>
    <h6>
      Instances :&emsp;<strong
        >Santiago Bernabeau,Signal Iduna Light Park,Wanda Metropolitano,Allianz
        Arena... </strong
      >+ 4 more
    </h6>
    <h6>Modules Owned :&emsp;<strong>Reports & Analytics</strong></h6>
    <br /><br />
    <h5><strong>Members</strong></h5>
  </div>
  <div>
    <DataTable :value="data" :rowHover="true">
      <Column field="name" header=" Name"></Column>
      <Column field="email" header="Email Id"></Column>
      <Column field="role" header="Role"></Column>
      <Column field="permissionlevel" header="Permission Level"></Column>
    </DataTable>
  </div>
</template>

<script>
import MemberList from "@/service/MemberList";

export default {
  data() {
    return {
      visibleRight: false,
      displayBasic: false,
      displayBasic2: false,
      position: "center",
      memberList: null,

      selectedTeams: null,
      selectedRoles: null,
      selectedLevels: null,
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
          class: "p-highlight",
        },
      ],
      team: [
        { name: "Awesome Team" },
        { name: "Development Team" },
        { name: "No Team" },
      ],
      role: [
        {
          level: "Junior developer",
        },
        {
          level: "Senior Developer",
        },
        {
          level: "Senior Test Engineer",
        },
        {
          level: "Technical Architect",
        },
        {
          level: "Automation Test",
        },
        {
          level: "Engineer",
        },
      ],
      permission: [
        { permissionlevel: "Root User" },
        {
          permissionlevel: "Super User",
        },
        {
          permissionlevel: "Owner",
        },
        {
          permissionlevel: "Admin",
        },
      ],
    };
  },
  created() {
    this.memberList = new MemberList();
  },
  mounted() {
    this.memberList.getPosts().then((data) => (this.data = data));
  },
  methods: {
    goInstance() {
      this.$router.push({ name: "Instance" });
    },
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
.p-datatable-header {
  padding: 1rem;
  text-align: right;
  font-size: 1.5rem;
}
.p-button-display {
  padding: 1rem;
  text-align: right;
  font-size: 1.5rem;
}

.p-button {
  margin: 0.3rem 0.5rem;
  min-width: 10rem;
}
.p-Inputtext {
  padding: 1rem;
  text-align: left;
  font-size: 1.5rem;
}
</style>