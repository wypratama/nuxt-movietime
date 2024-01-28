<template>
  <div class="navbar">
    <div class="navbar__content content">
      <nuxt-img src="/img/moovietime-logo@2x.png" provider="local" placeholder height="31" @click="navigateTo('/')" />
      <input type="search" class="content__search" placeholder="Find Movie">
      <div class="content__categories">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z" fill="currentColor" />
          <path d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z" fill="currentColor" />
          <path d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z" fill="currentColor" />
          <path d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z" fill="currentColor" />
        </svg>

        <span>CATEGORIES</span>
      </div>
      <ul class="content__menu">
        <li>MOVIES</li>
        <li>TV SHOWS</li>
        <li>LOGIN</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  background: #FFFFFF0D;
  padding: 15px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar__content {
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
}

.content__search {
  width: 100%;
  background: rgba(0, 0, 0, 0.13);
  padding: 7px 14px;

  border-radius: 4px;
  box-shadow: 0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent;
  border: none;
  outline: none;

  &:hover {
    box-shadow: 0 0 0 .15vw rgba(235, 143, 135, 0.186);
  }

  &:focus {
    box-shadow: 0 0 0 .15vw #E74C3C;
  }
}

.content__categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
  cursor: pointer;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  &:hover {
    color: #E74C3C;
  }
}

.content__menu {
  display: flex;
  list-style: none;
  gap: 39px;
  margin: 0;
  padding: 0;
  width: max-content;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  & > li {
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      color: #E74C3C;
    }
  }
}
</style>
