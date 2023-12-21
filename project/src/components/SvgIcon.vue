<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true,
    },

    classN: {
      default: "",
      type: String,
    },
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/icons/svg/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }

      return icon.url;
    },

    className() {
      return 'icon ' + this.classN;
    }
  }
};
</script>

<style>
  .icon {
    fill: currentColor;
    height: 24px;
    width: 24px;
  }
</style>
