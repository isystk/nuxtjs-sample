<template>
  <div class="wrap">
    <Header></Header>
    <div class="content">
      <main>
        <Detail :post-id="$route.params.id"></Detail>
      </main>
      <side-menu></side-menu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import SideMenu from '../../components/SideMenu';
import Detail from '../../components/Detail.vue';

export default {
  components: {
    Header,
    Footer,
    SideMenu,
    Detail
  },
  validate ({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id)
  }
}

</script>
