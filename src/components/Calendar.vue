<template>
  <a-calendar v-model:value="value">
    <template #dateCellRender="{ current: value }">
      <ul :class="['events']">
        <li v-for="item in getListData(value)" :key="item.content">
          <a-badge :status="item.type" :text="item.content" />
        </li>
      </ul>
    </template>
    <template #monthCellRender="{ current: value }">
      <div v-if="getMonthData(value)" class="notes-month">
        <section>{{ getMonthData(value) }}</section>
        <span>Backlog number</span>
      </div>
    </template>
  </a-calendar>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref();

    const getListData = (value) => {
      let listData;

      switch (value.date()) {
        case 8:
          listData = [
            {
              type: "warning",
              content: "上班:6:00",
            },
            {
              type: "success",
              content: "下班:18:00",
            },
          ];
          break;

        case 10:
          listData = [
            {
              type: "warning",
              content: "上班:6:00",
            },
            {
              type: "success",
              content: "下班:18:00",
            },
            {
              type: "error",
              content: "請假1hr",
            },
          ];
          break;

        case 15:
          listData = [
            {
              type: "warning",
              content: "上班:6:00",
            },
            {
              type: "success",
              content: "下班:18:00",
            },
            {
              type: "error",
              content: "請假1hr",
            },
            {
              type: "error",
              content: "請事假1hr",
            },
          ];
          break;

        default:
      }

      return listData || [];
    };

    const getMonthData = (value) => {
      if (value.month() === 8) {
        return 1394;
      }
    };

    return {
      value,
      getListData,
      getMonthData,
    };
  },
});
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
/* .ant-fullcalendar-date {
  background: papayawhip;
} */
.ant-fullcalendar-selected-day {
  background: pink;
}
</style>
