import Reactors from 'reactors';
export {default as default} from './FileDialog';

export const dialog = {
  open() {
    switch (Reactors.platform) {

    default: {
      throw new Error(`Unknown platform ${Reactors.platform}`);
    }

    case 'mobile': {
      console.warn('Mobile not supported yet');
    } break;

    case 'web': {
      console.warn('Web not supported');
    } break;

    case 'desktop': {
      return require('./desktop').default();
    }

    }
  },
};
