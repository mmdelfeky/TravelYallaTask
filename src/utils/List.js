import store from '../store/store';

export const getResponseTransformed = (response) => {
  const {meta, data} = response.data;

  return {
    data: data.therapists,
    pageCount: meta.pagination ? meta.pagination.totalPages : 1,
    page: meta.pagination ? meta.pagination.page : 1,
  };
};

export const getTranslatedValue = (value, key) => {
  const lang = store.getState().lang.lang;
  return value[`${key}${lang.charAt(0).toUpperCase() + lang.slice(1)}`];
};
