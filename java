function isCurrentDateInRange(startDate, endDate) {
    const currentTime = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    return (currentTime >= start && currentTime <= end) ? 1 : 0;
}

