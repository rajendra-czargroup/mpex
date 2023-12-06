import { ref, onMounted } from '@nuxtjs/composition-api';
import { useApi } from '~/composables/useApi';
import footerQuery from './footer.gql';

type QueryResponse = {
    footerConfig: [],
};
export const useFooter = () => {
  const { query } = useApi();
  const footerContent = ref<any | null>(null);

  onMounted(() => {
    query<QueryResponse>(footerQuery)
      .then((response) => {
        footerContent.value = response?.data?.footerConfig;
      });
  });
  
  return {
    footerContent,
  };
};

export default useFooter;