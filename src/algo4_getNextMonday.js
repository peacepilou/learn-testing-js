function getNextMonday(date) {
    const d = new Date(date);
    const day = d.getDay();

    const daysUntilNextMonday = day === 0 ? 1 : 8 - day;
    d.setDate(d.getDate() + daysUntilNextMonday);
    return d;
}

module.exports = getNextMonday;