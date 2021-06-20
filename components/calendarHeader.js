const MAPPED_MONTHS_LONG_NAME = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro"
};

const MAPPED_MONTHS_SHORT_NAME = Object.values(
  MAPPED_MONTHS_LONG_NAME
).map(name => name.slice(0, 3));

export default {
  name: "calendarHeader",

  data() {
    return {
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth() + 1
    };
  },

  watch: {
    selectedYear(value) {
      this.$emit("selectYear", value);
    },
    selectedMonth(value) {
      this.$emit("selectMonth", value);
    }
  },

  computed: {
    nextYear() {
      return this.selectedYear + 1;
    },
    previousYear() {
      return this.selectedYear - 1;
    }
  },

  methods: {
    increaseYear() {
      this.selectedYear++;
    },

    decreaseYear() {
      this.selectedYear--;
    },

    increaseMonth() {
      this.selectedMonth++;
    },

    decreaseMonth() {
      this.selectedMonth--;
    },

    setSelectedMonth(selectedMonth) {
      this.selectedMonth = selectedMonth;
    },

    setSelectedYear(selectedYear) {
      this.selectedYear = selectedYear;
    }
  },

  render(h) {
    return (
      <div>
        <p style="display: flex;">
          <span
            onClick={e => {
              console.log(e.target.innerText);
              this.setSelectedYear(Number(e.target.innerText));
            }}
          >
            {this.previousYear}
          </span>
          <span onClick={this.decreaseYear} style="cursor:pointer;">
            {"<<  "}
          </span>
          {this.selectedYear}
          <span onClick={this.increaseYear} style="cursor:pointer;">
            {"  >>"}
          </span>
          <span
            onClick={e => {
              console.log(e.target.innerText);
              this.setSelectedYear(Number(e.target.innerText));
            }}
          >
            {this.nextYear}
          </span>
        </p>
        {/* Colocar condição para renderização de acordo com dispositivo */}
        <div>
          <ul style="display: flex; width: 100%; flex-wrap: wrap;">
            {MAPPED_MONTHS_SHORT_NAME.map((name, index) => (
              <li
                onClick={() => this.setSelectedMonth(index + 1)}
                style="padding: 4px; width: 25%;border: solid 1px black; text-align: center;"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
        <div style="display: flex;">
          <p style="flex: 1; text-align: center;">
            <span onClick={this.decreaseYear} style="cursor:pointer;">
              {"<<  "}
            </span>
            {this.selectedYear}
            <span onClick={this.increaseYear} style="cursor:pointer;">
              {"  >>"}
            </span>
          </p>
          <br />
          <p style="flex: 1; text-align: center;">
            <span onClick={this.decreaseMonth} style="cursor:pointer;">
              {"<<  "}
            </span>
            {MAPPED_MONTHS_LONG_NAME[this.selectedMonth]}
            <span onClick={this.increaseMonth} style="cursor:pointer;">
              {"  >>"}
            </span>
          </p>
        </div>
      </div>
    );
  }
};
