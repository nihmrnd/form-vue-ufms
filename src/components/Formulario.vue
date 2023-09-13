<template>
  <div>
    <div class="imagem-logo">
      <img src="../assets/img/logo.png" alt="imagem-institucional-ufms">
    </div>
    <form @submit.prevent="submitForm">
      <fieldset style="border: 2px solid #3498db; border-radius: 5px; padding: 10px;">
        <legend style="font-weight: bold;"> Dados pessoais: </legend>
          <table>
          <tr>
            <td><label for="nome">Nome completo</label></td>
            <td><input type="text" id="nome" v-model="formData.nome" required></td>
          </tr>
          <tr>
            <td><label for="cpf">CPF</label></td>
            <td><input type="number" id="cpf" v-model="formData.cpf" required></td>
          </tr>
          <tr>
            <td><label for="data-nascimento">Data de nascimento</label></td>
            <td><input type="text" id="data-nascimento" v-model="formData.dataNascimento" required></td>
            <td><p>Sexo</p></td>
            <label class="sexo">
              <td><input type="radio" value="M" v-model="formData.sexo">M</td>
              <td><input type="radio" value="F" v-model="formData.sexo">F</td>
            </label>
          </tr>
          <tr>
            <td><label for="estado-civil">Estado civil:</label></td>
            <td><select id="estado-civil" v-model="formData.estadoCivil">
              <option value="Solteiro">Solteiro</option>
              <option value="Casado">Casado</option>
              <option value="Viuvo">Viuvo</option>
              <option value="Divorciado">Divorciado</option>
            </select></td>
          </tr>
        </table>
       </fieldset>
       <br>
       
       <fieldset style="border: 2px solid #3498db; border-radius: 5px; padding: 10px;">
        <legend style="font-weight: bold;">Dados de contato:</legend>
        <table>
          <tr>
            <td><label for="email">Email</label></td>
            <td><input type="text" id="email" v-model="formData.email" required></td>
          </tr>

          <tr>
            <td><label for="endereco">Endereço</label></td>
            <td><input type="text" id="endereco" v-model="formData.endereco" required></td>
          </tr>

          <tr>
            <td><label for="bairro">Bairro</label></td>
            <td><input type="text" id="bairro" v-model="formData.bairro" required></td>
            <td><label for="cidade">Cidade</label></td>
            <td><input type="text" id="cidade" v-model="formData.cidade" required></td>
          </tr>

          <tr>
            <td><label for="cep">CEP</label></td>
            <td><input type="number" id="cep" v-model="formData.cep" required></td>
            <td><label for="uf">UF</label></td>
            <td><select id="uf" v-model="formData.uf" required>
              <option value="ac">AC</option>
              <option value="al">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
              <option value="DF">DF</option>
            </select></td>
          </tr>

          <tr>
            <td><label for="celular">Celular</label></td>
            <td><input type="number" id="celular" v-model="formData.celular" required></td>
          </tr>

          <tr>
            <td><label for="login">Login</label></td>
            <td><input type="text" id="login" v-model="formData.login" required></td>
            <td><label for="senha">Senha</label></td>
            <td><input type="password" id="senha" v-model="formData.senha" required></td>
          </tr>
        </table>
       </fieldset>

       <fieldset style="border: 2px solid #3498db; border-radius: 5px; padding: 10px;">
        <legend style="font-weight: bold;">Dados de Cadastro:</legend>
          <div class="servicos">
            <div><label for="servicos">Deseja receber informações sobre os seguintes assuntos abaixo:</label></div>
          </div>
          
          <div class="table-services">
            <div><input type="checkbox"  id="servicos" value="Tecnologia" v-model="formData.servicos"> Tecnologia </div>
            <div><input type="checkbox"  id="servicos" value="Esportes" v-model="formData.servicos"> Esportes </div>
            <div><input type="checkbox"  id="servicos" value="Automoveis" v-model="formData.servicos"> Automoveis </div>
            <div><input type="checkbox"  id="servicos" value="Politica" v-model="formData.servicos"> Política </div>
            <div><input type="checkbox"  id="servicos" value="Culinaria" v-model="formData.servicos"> Culinária </div>
            <div> <input type="checkbox" id="servicos" value="Policial" v-model="formData.servicos"> Policial </div>
            <div><input type="checkbox" id="servicos" value="Tempo" v-model="formData.servicos"> Tempo </div>
            <div><input type="checkbox" id="servicos" value="Cultura" v-model="formData.servicos">  Cultura </div>
            <div><input type="checkbox" id="servicos" value="Economia" v-model="formData.servicos"> Economia </div>
            <div><input type="checkbox"  id="servicos" value="Jogos" v-model="formData.servicos"> Jogos </div>
            <div><input type="checkbox"  id="servicos" value="Educação" v-model="formData.servicos"> Educação </div>
            <div><input type="checkbox"  id="servicos" value="Viagem" v-model="formData.servicos"> Viagem </div>
            <div><input type="checkbox"  id="servicos" value="Moda e Estilo" v-model="formData.servicos"> Moda e Estilo </div>
          </div>

          <br>
          <div class="agreement">
            <label class="term">
              <input type="checkbox" id="termo" v-model="formData.terms" class="termos-aceite">
             Li as regras de cadastro e autorizo a criação do usuário.
            </label>
          </div>
       </fieldset>

      <button type="submit" class="button">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nome: '',
        cpf: '',
        dataNascimento: '',
        estadoCivil: '',
        email: '',
        endereco: '',
        bairro: '',
        cidade: '',
        cep: '',
        uf: '',
        celular: '',
        login: '',
        senha: '',
        servicos: [],
        terms: false,
      },
    };
  },
  methods: {
    submitForm() {
      localStorage.setItem('formData', JSON.stringify(this.formData));
      this.$router.push('/relatorio');
    },
  },
};
</script>

<style>
.servicos{
  margin-top: 5px;
}

.table-services {
  display: flex;
  flex-wrap: wrap;
  gap: 3px; 
  justify-content: flex-start;
}

.table-services > div {
  flex-basis: calc(25% - 10px);
  padding: 10px;
  border: 1px;
}

.button {
  margin-top: 5px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2980b9;
}
</style>