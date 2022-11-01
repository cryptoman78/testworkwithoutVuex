<template>
  <div>
    <form @submit="onSubmitForm" class="form">
      <div class="form-row">
        <input
          type="number"
          name="price"
          step="any"
          @input="debounceInput"
          :value="price"
        />
        <input
          type="number"
          name="qty"
          step="any"
          @input="debounceInput"
          :value="qty"
        />
        <input
          type="number"
          name="amount"
          step="any"
          @input="debounceInput"
          :value="amount"
        />
        <button type="submit">Отправить</button>
      </div>
      <div class="form-row">
        <label for="price">price: {{ price }}</label>
        <label for="qty">qty: {{ qty }}</label>
        <label for="amount">amount: {{ amount }}</label>
        <label for="localstorage">localstorage: {{ saveInLocalStorage }}</label>
      </div>
    </form>
    <div class="list">
      <div class="list-item" v-for="(item, index) in history" :key="index">
        Тип события: {{ item.type }} Имя события: {{ item.name }} Значение
        события: {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "lodash.debounce";
export default {
  name: "TestWork",
  data: () => ({
    price: 0,
    qty: 0,
    amount: 0,
    nonce: 0,
    history: [],
    saveInLocalStorage: localStorage.getItem("data"),
  }),
  methods: {
    isNumber(value) {
      const numberAllowed = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
      ];
      return numberAllowed.includes(value) ? true : false;
    },
    onInputChange(event) {
      const { name, value } = event.target;
      const parseValue = Number(value);
      if (typeof parseValue !== "number" || parseValue < 0) {
        console.log(parseValue);
        return;
      }
      if (name === "price") {
        this.amount = parseValue * this.qty;
      } else if (name === "qty") {
        this.amount = parseValue * this.price;
      } else {
        const lastInput = this.history.find(
          (item) =>
            item.type === "input" &&
            (item.name === "price" || item.name === "qty")
        );
        if (lastInput && lastInput.name === "price" && this.qty > 0) {
          this.qty = parseValue / this.price;
        } else if (lastInput && lastInput.name === "qty" && this.price > 0) {
          this.price = parseValue / this.qty;
        }
      }
      this[name] = parseValue;
      this.addEventHistory({
        type: "input",
        name: name,
        value: parseValue,
        date: new Date(),
      });
    },
    debounceInput: debounce(function (event) {
      this.onInputChange(event);
    }, 300),
    onSubmitForm(event) {
      event.preventDefault();
      this.nonce++;
      this.addEventHistory({
        type: "submit",
        name: "Отправка фориы",
        value: `localstorage:${this.saveInLocalStorage}`,
      });
      setTimeout(() => {
        let response;
        if (this.amount % 2 === 0) {
          localStorage.setItem(
            "data",
            JSON.stringify({
              price: this.price,
              qty: this.qty,
              amount: this.amount,
              nonce: this.nonce,
            })
          );
          response = true;
          this.saveInLocalStorage = localStorage.getItem("data");
        } else {
          response = false;
        }
        this.addEventHistory({
          type: "submit",
          name: "Получение данных с бекенда",
          value: `success: ${response} , localstorage:${this.saveInLocalStorage}`,
        });
      }, 1000);
    },
    addEventHistory(event) {
      this.history.push(event);
    },
  },
  created() {
    localStorage.removeItem("data");
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.form-row {
  margin-top: 20px;
}
input,
button,
label {
  margin-left: 20px;
}
.list {
  height: 300px;
  border: 1px solid red;
  margin-top: 10px;
}
</style>
