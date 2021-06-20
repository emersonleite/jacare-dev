//import calendarHeader from "./calendarHeader"
//import calendarBody from "./calendarBody"

const DIAS_SEMANA = ["D", "S", "T", "Q", "Q", "S", "S"];

const LOCALE = "pt-br";

import "./index.css";


export const Calendar = {
  name: "VCalendar",

  data() {
    return {
      currentDate: new Date(),
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth() + 1,
      selectedDay: new Date().getDate()
    };
  },

  /* components: {
    calendarBody,
    calendarHeader
  },
 */
  computed: {
    currentDayOfTheWeek() {
      return this.currentDate.getDay();
    },

    selectedDateLocalePTBR() {
      let selectedDate = `${this.selectedMonth}-${this.selectedDay}-${this.selectedYear}`;
      return new Date(selectedDate).toLocaleDateString(LOCALE);
    },

    currentDateToLocalePTBR() {
      return this.currentDate.toLocaleDateString(LOCALE);
    }
  },

  watch: {
    selectedDateLocalePTBR(value) {
      this.$emit("selectedDateLocalPTBR", value);
    }
  },

  methods: {
    renderCalendar(
      selectedYear = this.selectedYear,
      selectedMonth = this.selectedMonth
    ) {
      let initial = this.dayOfTheWeekOnFirstDay(selectedYear, selectedMonth);
      let days =
        this.numberOfDaysInTheMonth(selectedYear, selectedMonth) + initial;

      let calendarRendered = "";
      for (let index = 1; index <= days; index++) {
        if (index % 7 === 0) {
          calendarRendered =
            calendarRendered +
            `<td ${this.setDataDateAttribute(index, initial)}>${index -
              initial}</td></tr>`;
        } else if (index == 1 || (index - 1) % 7 === 0) {
          calendarRendered =
            calendarRendered +
            `<tr><td ${this.setDataDateAttribute(index, initial)}>${index -
              initial}</td>`;
        } else if (index <= initial) {
          calendarRendered =
            calendarRendered +
            `<td ${this.setDataDateAttribute(index, initial)}></td>`;
        } else {
          calendarRendered =
            calendarRendered +
            `<td ${this.setDataDateAttribute(index, initial)}>${index -
              initial}</td>`;
        }
      }
      return calendarRendered;
    },

    /* Verificar como colocar 0 a esquerda */
    /* addZeroLeft(numberS) {
      return numberS.padStart(2, 0);
    }, */
    /* Verificar como colocar 0 a esquerda */

    setDataDateAttribute(index, initial) {
      return `data-date='${index - initial}/0${this.selectedMonth}/${
        this.selectedYear
      }'`;
    },

    numberOfDaysInTheMonth(selectedYear, selectedMonth) {
      return new Date(selectedYear, selectedMonth, 0).getDate();
    },

    dayOfTheWeekOnFirstDay(selectedYear, selectedMonth) {
      return new Date(`0${selectedMonth}/01/${selectedYear}`).getDay();
    },

    setSelectedDay(selectedDay) {
      this.selectedDay = selectedDay;
    },

    setSelectedYear(selectedYear) {
      this.selectedYear = selectedYear;
    },

    setSelectedMonth(selectedMonth) {
      this.selectedMonth = selectedMonth;
    }
  },

  render(h) {
    return (
      <div style="display: flex; flex-direction: column; width: 550px; margin: 0 auto;">
        <calendarHeader
          onSelectYear={event => this.setSelectedYear(event)}
          onSelectMonth={event => this.setSelectedMonth(event)}
        />
        <calendarBody
          tableWithRenderedCalendar={this.renderCalendar()}
          daysWeek={DIAS_SEMANA}
          currentDate={this.currentDateToLocalePTBR}
          onGetSelectedDay={event => this.setSelectedDay(event)}
        />
      </div>
    );
  }
};

export default Calendar
