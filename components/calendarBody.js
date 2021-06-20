const ID_TABLE = "table-calendar";
const CLASS_SELECTED_DATE = "selected-date";

export default {
  name: "calendarBody",

  data() {
    return {
      selectedDay: "",
      tableDataCells: ""
    };
  },

  props: {
    daysWeek: {
      type: Array
    },
    tableWithRenderedCalendar: {
      type: String
    },
    currentDate: {
      type: String
    }
  },

  watch: {
    selectedDay() {
      this.$emit("getSelectedDay", this.selectedDay);
    }
  },

  methods: {
    eventToAdd(event) {
      this.selectedDay = Number(event.target.innerText);

      /* Função */
      let tableDataCells = this.selectAllTableDataCells();
      for (let td of tableDataCells) {
        td.classList.remove(CLASS_SELECTED_DATE);
      }
      /*  */

      event.target.classList.add(CLASS_SELECTED_DATE);
    },

    eventsDOMContentLoaded() {
      let tableDataCells = this.selectAllTableDataCells();
      for (let td of tableDataCells) {
        if (td.dataset.date === this.currentDate) {
          td.classList.add("current-date");
        }
      }
    },

    selectAllTableDataCells() {
      let table = document.getElementById(ID_TABLE);
      let tableDataCells = table.getElementsByTagName("td");
      return tableDataCells;
    },

    addEvents() {
      let tableDataCells = this.selectAllTableDataCells();
      for (let td of tableDataCells) {
        td.addEventListener("click", this.eventToAdd);
      }
    }
  },

  mounted() {
    this.addEvents();
    this.eventsDOMContentLoaded();
  },

  updated() {
    this.addEvents();
    this.eventsDOMContentLoaded();
  },

  render(h) {
    return (
      <table id={ID_TABLE} style="width: 100%;">
        <thead>
          <tr>
            {this.daysWeek.map(day => (
              <th onClick={() => this.$emit("dayWeek", day)}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody domPropsInnerHTML={this.tableWithRenderedCalendar}></tbody>
      </table>
    );
  }
};
