<template>
  <div class="p-datatable-header">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText placeholder=" Search" />
    </span>
  </div>
  <TabMenu :model="items" />
  <div class="p-button-display">
    <Button label="New Team" icon="pi pi-plus" @click="visibleRight = true" />
    <Sidebar
      class="p-sidebar-md"
      v-model:visible="visibleRight"
      :baseZIndex="100"
      position="right"
    >
      <h6>Create New Team</h6>
      <br />
      <div>
        <label for="Team Name">Team Name</label><br />
        <InputText
          type="text"
          class="p-inputtext-sm"
          placeholder=" Enter Team Name"
        ></InputText>
      </div>
      <br />
      <div>
        <label for="Owner">Owner</label><br />
        <Dropdown
          placeholder="Jason Stone"
          v-model="selectedUsers"
          :options="user"
          optionLabel="name"
          class="p-dropdown-sm"
          disabled
        />
      </div>
      <br />

      <div>
        <label for="Instances">Instances</label><br />
        <Dropdown
          placeholder=" Select instances created by the team"
          class="p-inputtext-sm"
          disabled
        ></Dropdown>
      </div>
      <br />
      <div>
        <label for="modules owned">Modules Owned</label><br />
        <Textarea v-model="value1" rows="3" cols="50" />
      </div>
      <Button
        @click="visibleRight = false"
        label="Cancel"
        class="p-button-raised p-button-text p-button-plain"
      />

      <Button label="Create Team" />
    </Sidebar>
  </div>
  <div class="p-text">
    <span
      ><h5><strong> All Teams</strong></h5></span
    >

    <Card style="width: 25rem; margin-bottom: 2em">
      <template #title> Awesome Team </template>
      <template #subtitle>
        <p>Owner : <strong>Jason stone</strong></p>
        <p>
          Instances :
          <strong>Santiago Bernabeau, Signal Iduna Light Park </strong><br />
          <strong> Wanda Metropolitano, <br /></strong>
          <strong>Allianz Arena...</strong> +4more
        </p>
        <p>Modules Owned: <strong>Reports & Analytics</strong></p>
      </template>
      <template #content>
        <div class="col-12 md:col-4">
          <div class="card">
            <AvatarGroup class="mb-3">
              <Avatar
                image="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                size="large"
                shape="circle"
              />
              <Avatar
                image="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                size="large"
                shape="circle"
              />
              <Avatar
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7T7Chsqt5vzuqfuWaJq89hd6ndl2coMbdWIslEEKirKf9vTw1UvnlZctezqo1DdipWY&usqp=CAU"
                size="large"
                shape="circle"
              />
              <Avatar
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvo6Nbjo2Uyg7tr5YqccIH1tveebdd0w493uCBZZB-z0Nx8dPWbjvSd_uOlxl9cTdN20&usqp=CAU"
                size="large"
                shape="circle"
              />
              <Avatar
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48nKrarkWKGRtDsORi-1ylQkmrW1V8k59Vg&usqp=CAU"
                size="large"
                shape="circle"
              />
              <Avatar
                label="+14"
                shape="circle"
                size="medium"
                style="background-color: #e2e3e7; color: black"
              />
            </AvatarGroup>
          </div>
        </div>
      </template>
    </Card>
    <Card style="width: 25rem; margin-bottom: 2em">
      <template #title> No Team </template>
      <template #subtitle>
        <p>Owner : <strong>Jason stone</strong></p>
        <p>
          Instances :
          <strong>Santiago Bernabeau, Signal Iduna Light Park </strong><br />
          <strong> Wanda Metropolitano, <br /></strong>
          <strong>Allianz Arena...</strong> +4more
        </p>
        <p>Modules Owned: <strong>Reports & Analytics</strong></p>
      </template>
      <template #content>
        <div class="col-12 md:col-4">
          <div class="card">
            <AvatarGroup class="mb-3">
              <Avatar
                image="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
                size="large"
                shape="circle"
              />
              <Avatar
                image="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                size="large"
                shape="circle"
              />
              <Avatar
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7T7Chsqt5vzuqfuWaJq89hd6ndl2coMbdWIslEEKirKf9vTw1UvnlZctezqo1DdipWY&usqp=CAU"
                size="large"
                shape="circle"
              />
              <Avatar
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvo6Nbjo2Uyg7tr5YqccIH1tveebdd0w493uCBZZB-z0Nx8dPWbjvSd_uOlxl9cTdN20&usqp=CAU"
                size="large"
                shape="circle"
              />
              <Avatar
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48nKrarkWKGRtDsORi-1ylQkmrW1V8k59Vg&usqp=CAU"
                size="large"
                shape="circle"
              />
              <Avatar
                label="+14"
                shape="circle"
                size="medium"
                style="background-color: #e2e3e7; color: black"
              />
            </AvatarGroup>
          </div>
        </div>
      </template>
    </Card>
  </div>
  <Card style="width: 25rem; margin-bottom: 2em">
    <template #title> No Team </template>
    <template #subtitle>
      <p>Owner : <strong>Jason stone</strong></p>
      <p>
        Instances : <strong>Santiago Bernabeau, Signal Iduna Light Park </strong
        ><br />
        <strong> Wanda Metropolitano, <br /></strong>
        <strong>Allianz Arena...</strong> +4more
      </p>
      <p>Modules Owned: <strong>Reports & Analytics</strong></p>
    </template>
    <template #content>
      <div class="col-12 md:col-4">
        <div class="card">
          <AvatarGroup class="mb-3">
            <Avatar image="" size="large" shape="circle" />
            <Avatar
              image="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              size="large"
              shape="circle"
            />
            <Avatar
              image="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              size="large"
              shape="circle"
            />
            <Avatar
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt7T7Chsqt5vzuqfuWaJq89hd6ndl2coMbdWIslEEKirKf9vTw1UvnlZctezqo1DdipWY&usqp=CAU"
              size="large"
              shape="circle"
            />
            <Avatar
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvo6Nbjo2Uyg7tr5YqccIH1tveebdd0w493uCBZZB-z0Nx8dPWbjvSd_uOlxl9cTdN20&usqp=CAU"
              size="large"
              shape="circle"
            />
            <Avatar
              label="+14"
              shape="circle"
              size="medium"
              style="background-color: #e2e3e7; color: black"
            />
          </AvatarGroup>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      selectedUsers: null,
      visibleRight: false,

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
      user: [
        {
          name: "Jason Stone",
        },
        { name: "Gianluigi Donnarumma" },
      ],
    };
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
.p-text {
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
}
.card {
  text-align: center;
}
</style>