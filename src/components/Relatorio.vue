<template>
  <div>
    <section class="section" id="result">
      <div class="titulo-relatorio">
        Relatório do formulário
      </div>
      <div style="border: 2px solid #3498db; border-radius: 5px; padding: 10px;">
        <ul>
          <li v-for="(item, k) in formData" v-bind:key="k" style="list-style-type: none;">
           {{ k }}: {{ item }}
          </li>
        </ul>
      </div>
    </section>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
  mounted() {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      this.formData = JSON.parse(storedData);
    }
  },
};
</script>

<style scooped>
.titulo-relatorio{
      font-size: 24px;
      font-weight: bold;
      padding: 10px 20px; 
      border: 2px; 
      border-radius: 5px;
      text-align: center;
      text-transform: uppercase;
}
</style>