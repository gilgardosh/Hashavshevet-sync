const date = {
  now: new Date(),
  startDate(months) {
    const startDate = new Date(this.now.getTime());
    startDate.setMonth(startDate.getMonth() - months);
    return startDate;
  },
  startDateISO(months) {
    return this.startDate(months).toISOString();
  },
  startDateHash(months) {
    const startDate = this.startDateISO(months);
    const year = startDate.slice(0, 4);
    const month = startDate.slice(5, 7);
    const day = startDate.slice(8, 10);
    return `${year}/${month}/${day}`;
  },
};

export { date };
