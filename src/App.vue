<template>
  <div class="app__inner">
    <LeftNavBar />
    <div class="app__page">
      <Header />
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavBar from '~/components/LeftNavBar'
import Header from '~/components/Header'

export default {
  components: {
    LeftNavBar,
    Header
  }
}
</script>

<style lagn="scss" scoped>
.app__inner {
  display: flex;
  height: 100vh;
  font-size: 14px;
  line-height: 1.4;
  font-family: 'Noto Sans KR', sans-serif;
  color: $color-font;
  .app__page {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .page__container {
      flex-grow: 1;
      overflow-y: auto;
    }
    .page__header {
      height: 80px;
    }
  }
}
</style>