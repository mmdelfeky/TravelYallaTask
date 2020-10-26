import {SET_LANG} from './types';
import store from '../store/store';

export const setLang = (lang, rtl) => async (dispatch) => {
  if (rtl === store.getState().lang.rtl) {
    return;
  }
  dispatch({type: SET_LANG, lang, rtl});
};
