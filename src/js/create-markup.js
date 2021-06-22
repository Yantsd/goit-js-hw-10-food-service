export const buildMenuList = (ref, template, data) => {
  ref.innerHTML = template(data);
};
