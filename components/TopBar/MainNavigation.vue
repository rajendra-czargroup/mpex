<!-- <template>
  <div>
    <SfHeader> -->
        <template #navigation>
            <HeaderNavigation :category-tree="categoryTree" />
          </template>      
        <!-- </SfHeader>  
        </div>
    </template> -->
    
    <script lang="ts">
    import {
      SfHeader, 
    } from '@storefront-ui/vue';
    
    import {
      ref,
      defineComponent,
      useFetch,
    } from '@nuxtjs/composition-api';
    import HeaderNavigation from '~/components/Header/Navigation/HeaderNavigation.vue';
    import { useCategory } from '~/modules/catalog/category/composables/useCategory';
    import type { CategoryTree, ProductInterface } from '~/modules/GraphQL/types';
    
    export default defineComponent({
      components: {
        HeaderNavigation,
         SfHeader,
        },
      setup() {
        const { categories: categoryList, load: categoriesListLoad } = useCategory();
        const categoryTree = ref<CategoryTree[]>([]);
          useFetch(async () => {
          await categoriesListLoad({ pageSize: 20 });
    
          categoryTree.value = categoryList.value?.[0]?.children
            .filter((category) => category.include_in_menu);
        });   
    
        return {  
          categoryTree,
        };
      },
    });
    </script>