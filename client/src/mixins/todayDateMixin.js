export default {

  computed: {
    todayDate () {
      const formatYmd = (date) => date.toISOString().slice(0, 10);
      return formatYmd(new Date());
    },
  },
};
