let globalData = null;

export const setGlobalData = (data) => {
  globalData = data;
};

export const getGlobalData = () => {
  return globalData;
};