document.getElementById("do").onclick = () => {
    let date1 = document.getElementById("date1");
    let date2 = document.getElementById("date2");

    let datea = new Date(date1.value); 
    let dateb = new Date(date2.value);

    let days = datea - dateb;

    document.getElementById("days").value = Math.ceil(Math.abs(days)/(1000 * 60 * 60 * 24));
};