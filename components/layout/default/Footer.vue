<template>
  <div class="footer">
    <div class="footer-inner">
      <span class="footer__copyright">©  2024 MoovieTime. All rights reserved.</span>
      <NuxtImg src="/img/moovietime-logo-grey@2x.png" provider="local" height="24" />
      <span class="footer__attribution">Made with NUXT 3</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: rgba(0, 0, 0, 0.29);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 65px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #929292;
}

.footer__copyright {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.footer__attribution {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
