<template>
  <div class="wrap">
    <Header></Header>
    <div class="content">
      <main>
        <article class="detail" >
          <div class="entry-header">
            <h1 class="entry-title">会社概要</h1>
          </div>
          <div class="entry-content" >
            <h2>INFORMATION</h2>
            <table class=""><tbody><tr><td>会社名</td><td>TEXTTEXTTEXTTEXT</td></tr><tr><td>所在地</td><td>TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT</td></tr><tr><td>代表者</td><td>TEXTTEXTTEXT</td></tr><tr><td>設立年月日</td><td>YYYY年MM月</td></tr><tr><td>お問い合わせ</td><td>TEXTTEXTTEXTTEXTTEXTTEXT</td></tr></tbody></table>
          </div>
          <div class="clearfix"></div>
        </article>
      </main>
      <side-menu></side-menu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from "vuex-class"
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import SideMenu from '../../components/SideMenu.vue';

@Component({
  components: {
    Header,
    Footer,
    SideMenu,
  }
})
export default class extends Vue {
}
</script>

