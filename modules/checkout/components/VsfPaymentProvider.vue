<template>
  <div>
    <SfRadio
      v-for="method in paymentMethods"
      :key="method.code"
      v-e2e="'payment-method'"
      :label="method.title"
      :value="method.code"
      :selected="selectedPaymentMethodCode"
      name="paymentMethod"
      class="form__radio payment"
      @input="definePaymentMethods(method.code)"
    >
      <div class="payment__label">
        {{ method.title }}
      </div>
    </SfRadio>
<div id="paypal-container">
</div>
  </div>
</template>

<script lang="ts">
import { SfRadio } from '@storefront-ui/vue';
import { ref, onMounted, defineComponent } from '@nuxtjs/composition-api';
import usePaymentProvider from '~/modules/checkout/composables/usePaymentProvider';
import type { AvailablePaymentMethod } from '~/modules/GraphQL/types';
import { loadScript } from '@paypal/paypal-js';

export default defineComponent({
  name: 'VsfPaymentProvider',
  components: {
    SfRadio,
  },
  emits: ['status'],
  setup(_props, { emit }) {
    const paymentMethods = ref<AvailablePaymentMethod[]>([]);
    const { load, save } = usePaymentProvider();
    const selectedPaymentMethodCode = ref<string | null>(null);

    onMounted(async () => {
      paymentMethods.value = await load();
    });

    const definePaymentMethods = async (paymentMethodCode: string) => {
      if(paymentMethodCode == 'payflow_express') {
          const paypal = await loadScript({ clientId: "Abi8nzgDs0kaiiGe3ptKFzkPaL4qpIFs3R0tyn91jxo9hCdCBWW_uEZmzGTPO8P1Yj9ZA2J3ZmxsqVKl" });
          if (paypal) {
            await paypal.Buttons().render("#paypal-container");
          }          
      }

      paymentMethods.value = await save({
        paymentMethod: {
          code: paymentMethodCode,
        },
      });

      selectedPaymentMethodCode.value = paymentMethodCode;
      emit('status', paymentMethodCode);
    };

    return {
      paymentMethods,
      selectedPaymentMethodCode,
      definePaymentMethods,
    };
  },
});
</script>

<style lang="scss" scoped>
.payment {
  &__label {
    display: flex;
    justify-content: space-between;
  }

  &__description {
    --radio-description-margin: 0;
    --radio-description-font-size: var(--font-xs);
  }
}
</style>