import { VAxios } from "@foxit/v-axios";

const instance = new VAxios({
  vConfig: {
    showLoading: true
  }
});

export default instance;
