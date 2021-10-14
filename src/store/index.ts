const methods = {
  toggleSidebar: () :void => {
    const elements = document.querySelectorAll('#side-menu div');
    Object.values(elements).forEach((div) => {
      div.classList.toggle('open');
    });
    const overlay:(HTMLElement | null) = document.getElementById('overlay');
    if (overlay) overlay.classList.toggle('fullscreen');
  },
};

export default {
  methods,
};
