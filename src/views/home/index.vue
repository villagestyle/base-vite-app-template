<template>
  <h3>{{ pageName }}</h3>

  <!-- <div>
    <p>{{ count }}</p>
    <button @click="addFn">点击</button>
  </div>

  <div>
    <input type="text" v-model="msg" />
    <p>{{ msg }}</p>
    <button @click="changeMsg">点击</button>
  </div> -->
  <div>
    <div>
      <label for="name">姓名</label>
      <input name="name" type="text" v-model="name" />
    </div>
    <div>
      <label for="no">学号</label>
      <input name="no" type="text" v-model="no" />
    </div>
    <div>
      <label for="idNo">身份证号</label>
      <input name="idNo" type="text" v-model="idNo" />
    </div>
    <div>
      <label for="address">住址</label>
      <input name="address" type="text" v-model="address" />
    </div>
    <div>
      <FormItem v-model="detail"></FormItem>
    </div>
    <button @click="reload">填写预设内容</button>
    <button @click="submit">提交</button>
  </div>
</template>

<script lang="ts">
import { AppStore } from "../../store/modules/app";
import { defineComponent, isRef, reactive, ref, toRefs } from "vue";
import FormItem from "../../components/form-item/index.vue";

export default defineComponent({
  components: {
    FormItem
  },
  mounted() {
    console.log(AppStore.getSysNo);
  },
  setup() {
    const pageName = "Home Page";

    const count = ref(1);

    console.log(isRef(count));

    const addFn = () => {
      count.value++;
    };

    const msg = ref("这是内容");

    const changeMsg = () => {
      msg.value = "这是内容" + count.value;
    };

    const form = reactive<FormData>({
      name: "",
      no: "",
      idNo: "",
      address: "",
      detail: ""
    });

    const submit = () => {
      console.log(form);
    };

    const reload = () => {
      form.name = "老王";
      form.no = "001";
      form.idNo = "1001";
      form.address = "北京市西城区";
      form.detail = "方法方法丰富";
    };

    return {
      pageName,
      count,
      addFn,
      changeMsg,
      msg,
      submit,
      reload,
      ...toRefs(form)
    };
  }
});

interface FormData {
  name: string;
  no: string;
  idNo: string;
  address: string;
  detail: string;
}
</script>
