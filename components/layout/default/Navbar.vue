<template>
  <div class="navbar">
    <div class="navbar__content content">
      <nuxt-img src="/img/moovietime-logo@2x.png" provider="local" placeholder height="31" />
      <input type="search" class="content__search" placeholder="Find Movie">
      <div>
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
