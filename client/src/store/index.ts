import { reactive, ref } from 'vue';

interface State {
    response: string,
    articleLimit: number,
}
const state: State = reactive({
  response: '',
  articleLimit: ref(12),
});
const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:5000/rss');
    const json = await res.json();
    state.response = json;
  } catch (err) {
    console.log(err);
  }
};

fetchData();

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
  state,
};
