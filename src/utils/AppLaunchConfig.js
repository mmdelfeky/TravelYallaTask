import {registerCustomIconType} from '../common';
import icoMoonConfig from '../common/utils/selection.json';

export default async () => {
  //icons
  await registerCustomIconType('custom', icoMoonConfig);
};
