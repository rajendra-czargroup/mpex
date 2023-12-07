<template>
  <SfFooter
    :column="4"
    multiple
    class="footer"
  >
  <SfFooterColumn :title="$t('USEFUL LINKS')">
    <SfList v-if="footerContent && footerContent[0] && footerContent[0].useful_links">
        <SfListItem
        v-for="(val, n) in footerContent[0].useful_links"
        :key="n">
          <SfMenuItem
            :label="$t(val.title)"
            :target="val.target"
            :link ="$t(generateLink(val.url))"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>

    <SfFooterColumn :title="$t('PURCHASE INFO')">
    <SfList v-if="footerContent && footerContent[0] && footerContent[0].purchase_info">
        <SfListItem
        v-for="(val, n) in footerContent[0].purchase_info"
        :key="n">
          <SfMenuItem
            :label="$t(val.title)"
            :target="val.target"
            :link ="$t(generateLink(val.url))"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn> 
       
    <SfFooterColumn :title="$t('GET IN TOUCH')">
      <SfList v-if="footerContent && footerContent[0] && footerContent[0].get_in_touch">
        <SfListItem
        v-for="(val, n) in footerContent[0].get_in_touch"
        :key="n">
            <p>{{val.title}}</p>
            <p v-html="val.value"></p>
        </SfListItem>
      </SfList>
    </SfFooterColumn>

    <SfFooterColumn :title="$t('FOLLOW US')">
      <SfList v-if="footerContent && footerContent[0] && footerContent[0].follow_us">
        <SfListItem
        v-for="(val, n) in footerContent[0].follow_us"
        :key="n" 
        v-html="val.section">
        </SfListItem>
      </SfList>
    </SfFooterColumn>

  </SfFooter>
</template>

<script lang="ts">
import {
  SfFooter, SfList, SfImage, SfMenuItem,SfLink
} from '@storefront-ui/vue';
import { defineComponent } from '@nuxtjs/composition-api';
import { generateLink } from '~/helpers/addBasePath';
import { useFooter } from './useFooter';

export default defineComponent({
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem,
    SfLink,
  },
  setup() {
    const {footerContent} = useFooter();

    return {
      generateLink,
      footerContent,
    };
  },
});
</script>

<style lang="scss">

.footer {
  margin-bottom: 3.75rem;
  @include for-desktop {
    margin-bottom: 0;
  }
  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);
    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
    }
  }
  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
    background-color: #fff;
    border-radius: 100%;
  }
}
.sf-footer {
  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    margin-top: var(--spacer-2xl);
  }
  &__container {
    margin: var(--spacer-sm);
    @include for-desktop {
      //max-width: 69rem;
      margin: 0 auto;
    }
  }
  .sf-list__item{
    color: #eeeee6;
  }
  .sf-link{
    color: #eeeee6;
    text-decoration: none;
  }
}
</style>
