exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: 'red',
    cursorColor: 'green',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: green;
      }
      .tabs_nav .tabs_title {
        color: green;
      }
    `
  });
}
