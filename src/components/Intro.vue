<template>
  <div class="intro">
    <img src="static/apple-icon.png" alt="" />
    {{$t("intro.greetingPrefix")}}
    <b>{{$t("intro.gameName")}}</b> {{$t("intro.greetingPostfix")}}
    {{$t("intro.shortcutPrefix")}}
    <span class="button" @click="toggleMenu">
      <font-awesome-icon icon="cog" /> Menu
    </span>
    {{$t("intro.shortcutPostfix")}} <b>[A]</b>. {{$t("intro.joinSessionShortcut")}} <b>[J]</b>.<br />
    <div class="footer">
      This project is free and open source and can be found on
      <a href="https://github.com/bra1n/townsquare" target="_blank">GitHub</a>.
      It is not affiliated with The Pandemonium Institute. "Blood on the
      Clocktower" is a trademark of Steven Medway and The Pandemonium Institute.
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
// eslint-disable-next-line no-unused-vars
import VueI18n from 'vue-i18n';

export default {
  methods: mapMutations(["toggleMenu"])
};
</script>

<style scoped lang="scss">
// Intro
.intro {
  text-align: center;
  width: 50%;
  font-size: 120%;
  position: absolute;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: 3px solid black;
  border-radius: 10px;
  z-index: 3;
  a {
    color: white;
  }
  img {
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 25vh;
    margin-left: -12.5vh;
    margin-bottom: 2vh;
    max-width: 192px;
    border-radius: 50%;
    box-shadow: 0 0 10px black;
    border: 3px solid black;
  }
  .footer {
    font-size: 60%;
    opacity: 0.75;
  }
}
</style>

<i18n>
  {
    "zh-cn": {},
    "en-us": {}
  }
</i18n>
