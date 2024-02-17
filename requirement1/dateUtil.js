function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const dateUtil = {
    isLeapYear: isLeapYear
};

export { isLeapYear };
export default dateUtil;
