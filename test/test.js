document.body.innerHTML = '<div><input id="date1"/><input id="date2"><button id="do"/><textarea id="days"/></div>';
require("../javascript/script.js");
let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");
let button = document.getElementById("do");
let days = document.getElementById("days");

test("testing different formats", () => {

    date1.value = "01.01.2022";
    date2.value = "01.01.2022";

    button.click();

    expect(days.value).toBe("0");

    date1.value = "2022/01/01";
    date2.value = "2022/01/01";

    button.click();

    expect(days.value).toBe("0");
});

test("test for the difference of one day", () => {
    date1.value = "01.02.2022";
    date2.value = "01.01.2022";

    button.click();

    expect(days.value).toBe("1");
});

test("test day 2 greater than day 1", () => {
    date1.value = "01.01.2022";
    date2.value = "01.02.2022";

    button.click();

    expect(days.value).toBe("1");
});

test("test next month", () => {
    date1.value = "01.01.2022";
    date2.value = "02.01.2022";

    button.click();

    expect(days.value).toBe("31");
});

test("test next year", () => {
    date1.value = "01.01.2022";
    date2.value = "01.01.2023";

    button.click();

    expect(days.value).toBe("365");
});