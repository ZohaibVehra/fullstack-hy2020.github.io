import { anchorate } from 'anchorate';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export { default as wrapPageElement } from './wrapPageElement';
export { default as wrapRootElement } from './wrapRootElement';

require('prismjs/themes/prism-dark.css');

export const onRouteUpdate = () => {
  anchorate({
    scroller: function (element) {
      if (!element) return false;
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    },
  });
};
