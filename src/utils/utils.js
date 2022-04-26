export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getActiveKey = (AppPages, pathname) => Object
  .keys(AppPages).find((key) => AppPages[key].route === pathname);
