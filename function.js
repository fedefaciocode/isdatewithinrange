window.function = function (currentDate, startDate, endDate) {
   
    if (currentDate.value === undefined || startDate.value === undefined || endDate.value === undefined) {
        return undefined;
    }


    const now = new Date(currentDate.value);
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);

   
    return (now >= start && now <= end) ? true : false;
}
