<template>
    <div class="topmenu">
      <template>
        <SfLink
          v-for="(val, n) in topMenues"
          :key="n"
          :class="'sf-header-navigation-item__link'+val.class"
          :target="val.target == 1 ?'_blank' : '_self'"
          :link="addBasePath(val.link)">
            <span>{{val.title}}</span>
        </SfLink>
      </template>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api';
  import { SfLink} from '@storefront-ui/vue';
  import { useTopBar } from './useTopBar';
  import { addBasePath } from '~/helpers/addBasePath';
  
  export default defineComponent({
    components: {
      SfLink,
    },
    setup() {
      const {topMenues } = useTopBar();
      return {
        topMenues,
        addBasePath,
      };
    },
  });
  </script>
  <style lang="scss" scoped>
  .topmenu {
    width: 100%;
    background-color: #666666;
    text-align: center;
    a{
      display: inline-block;
      padding: 10px 20px;
      color: #eeeee6;
      font-size: 16px;
    }
  }
  </style>