
window.onload = () =>  {   

    // const getTf = tc => {
    //     return tf = (9 / 5) * tc + 32;
    // };
    //  #1
    let tc = prompt("Enter temperature");
    let tf = (9 / 5) * tc + 32;

    alert(tf);

    //  #2
    const getTf = (tc) => {
        return tf = (9 / 5) * tc + 32;
    };

    let name = "Vasilii";
    let admin = name;
    alert(admin);

    //  #3
    let a =  1000 + "108";
    let b = 1000108;
    alert("check:"+ "1000" + "108");


};