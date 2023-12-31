import { useRouter, useContext} from '@nuxtjs/composition-api';

/**
 * Adds prefix with base path configured in router.base to provided url
 * @param {string} path - url to which base path will be added
 * @returns Relative path prefixed with router.base or not modified absolute path (it needs start from http or https)
 */
export const addBasePath = (path: string): string => {
  const pattern = /^((http|https):\/\/)/;

  if (pattern.test(path)) {
    return path;
  }

  const basePath = (useRouter().options.base).slice(0, -1);
  return `${basePath}${path}`;
};

export const generateLink = (path: string): string => {
  const pattern = /^((http|https):\/\/)/;

  if (pattern.test(path)) {
    return path;
  }

  const basePath =  (useRouter().options.base);
  const { localePath } = useContext();
  if(!path) {
    return  `${localePath('/')}${basePath}`;
  }

  return `${localePath('/')}${basePath}${path}`;
};
