let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let MainBtn = 0;

let item1 = "burger";
let item2 = "fries";
let item3 = "nuggets";
let item4 = "sause";
let item5 = "cocktails";
let item6 = "ice_cream";

let price_item1 = 10000;
let price_item1 = 20000;
let price_item1 = 15000;
let price_item1 = 30000;
let price_item1 = 20000;
let price_item1 = 10000;

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
    MainBtn += 1;
    if(MainBtn >= 1){
        tg.MainButton.setText("VIEW ORDER");
        tg.MainButton.show();
    }
});
btn2.addEventListener("click", function(){
    MainBtn += 1;
    if(MainBtn >= 1){
        tg.MainButton.setText("VIEW ORDER");
        tg.MainButton.show();
    }

});
btn3.addEventListener("click", function(){
    MainBtn += 1;
    if(MainBtn >= 1){
        tg.MainButton.setText("VIEW ORDER");
        tg.MainButton.show();
    }
});
btn4.addEventListener("click", function(){
    MainBtn += 1;
    if(MainBtn >= 1){
        tg.MainButton.setText("VIEW ORDER");
        tg.MainButton.show();
    }
});
btn5.addEventListener("click", function(){
    MainBtn += 1;
    if(MainBtn >= 1){
        tg.MainButton.setText("VIEW ORDER");
        tg.MainButton.show();
    }
});
btn6.addEventListener("click", function(){
    MainBtn += 1;
    if(MainBtn >= 1){
        tg.MainButton.setText("VIEW ORDER");
        tg.MainButton.show();
    }
});

let volumeBtn1 = 0;
let volumeBtn2 = 0;
let volumeBtn3 = 0;
let volumeBtn4 = 0;
let volumeBtn5 = 0;
let volumeBtn6 = 0;

let product1 = document.getElementById("product1");
let product2 = document.getElementById("product2");
let product3 = document.getElementById("product3");
let product4 = document.getElementById("product4");
let product5 = document.getElementById("product5");
let product6 = document.getElementById("product6");


document.getElementById("btn1").onclick = function(){
    let btn1 = document.getElementById("btn1")

    let newBtnMinus1 = document.createElement("button");
    let newBtnPlus1 = document.createElement("button");

    volumeBtn1 +=1;

    newBtnMinus1.classList.add('btn-amount-minus')
    newBtnMinus1.id = "btnminus1"

    newBtnPlus1.classList.add('btn-amount')
    newBtnPlus1.id = "btnplus1"

    newBtnMinus1.innerText = '-';
    newBtnPlus1.innerText = '+';

    let counter = document.createElement("p");
    counter.classList = "counter"
    counter.id = "cnt1"

    counter.innerHTML = volumeBtn1


    product1.appendChild(newBtnMinus1);
    product1.appendChild(newBtnPlus1);
    product1.appendChild(counter);
    btn1.remove();

    let btnminus1 = document.getElementById("btnminus1");
    btnminus1.addEventListener("click", function(){
        if(volumeBtn1 >= 1){
            volumeBtn1--;
            counter.innerHTML = volumeBtn1
        }
    if (volumeBtn1 == 0){
        MainBtn--;
        if(MainBtn == 0){
            tg.MainButton.hide();
        }
        newBtnMinus1.remove();
        newBtnPlus1.remove();
        counter.remove();
        product1.appendChild(btn1)
    }
    });

    let btnplus1 = document.getElementById("btnplus1");
    btnplus1.addEventListener("click", function(){
        if(volumeBtn1 >= 1){
            volumeBtn1++;
            counter.innerHTML = volumeBtn1
        }
    });
}

document.getElementById("btn2").onclick = function(){
    let btn2 = document.getElementById("btn2")

    let newBtnMinus2 = document.createElement("button");
    let newBtnPlus2 = document.createElement("button");
    volumeBtn2 +=1;

    newBtnMinus2.classList.add('btn-amount-minus')
    newBtnMinus2.id = "btnminus2"

    newBtnPlus2.classList.add('btn-amount')
    newBtnPlus2.id = "btnplus2"

    newBtnMinus2.innerText = '-';
    newBtnPlus2.innerText = '+';

    let counter = document.createElement("p");
    counter.classList = "counter"
    counter.id = "cnt2"

    counter.innerHTML = volumeBtn2

    product2.appendChild(newBtnMinus2);
    product2.appendChild(newBtnPlus2);
    product2.appendChild(counter);
    btn2.remove();

    let btnminus2 = document.getElementById("btnminus2");
    btnminus2.addEventListener("click", function(){
        if(volumeBtn2 >= 1){
            volumeBtn2--;
            counter.innerHTML = volumeBtn2
        }
    if (volumeBtn2 == 0){
        MainBtn--;
        if(MainBtn == 0){
            tg.MainButton.hide();
        }
        newBtnMinus2.remove();
        newBtnPlus2.remove();
        counter.remove();
        product2.appendChild(btn2)
    }
    });

    let btnplus2 = document.getElementById("btnplus2");
    btnplus2.addEventListener("click", function(){
        if(volumeBtn2 >= 1){
            volumeBtn2++;
            counter.innerHTML = volumeBtn2
        }
    });

}
document.getElementById("btn3").onclick = function(){
    let btn3 = document.getElementById("btn3")

    let newBtnMinus3 = document.createElement("button");
    let newBtnPlus3 = document.createElement("button");
    volumeBtn3 +=1;

    newBtnMinus3.classList.add('btn-amount-minus')
    newBtnMinus3.id = "btnminus3"

    newBtnPlus3.classList.add('btn-amount')
    newBtnPlus3.id = "btnplus3"

    newBtnMinus3.innerText = '-';
    newBtnPlus3.innerText = '+';

    let counter = document.createElement("p");
    counter.classList = "counter"
    counter.id = "cnt3"

    counter.innerHTML = volumeBtn3

    product3.appendChild(newBtnMinus3);
    product3.appendChild(newBtnPlus3);
    product3.appendChild(counter);
    btn3.remove();

    let btnminus3 = document.getElementById("btnminus3");
    btnminus3.addEventListener("click", function(){
        if(volumeBtn3 >= 1){
            volumeBtn3--;
            counter.innerHTML = volumeBtn3
        }
    if (volumeBtn3 == 0){
        MainBtn--;
        if(MainBtn == 0){
            tg.MainButton.hide();
        }
        newBtnMinus3.remove();
        newBtnPlus3.remove();
        counter.remove();
        product3.appendChild(btn3)
    }
    });

    let btnplus3 = document.getElementById("btnplus3");
    btnplus3.addEventListener("click", function(){
        if(volumeBtn3 >= 1){
            volumeBtn3++;
            counter.innerHTML = volumeBtn3
        }
    });

}
document.getElementById("btn4").onclick = function(){
    let btn4 = document.getElementById("btn4")

    let newBtnMinus4 = document.createElement("button");
    let newBtnPlus4 = document.createElement("button");
    volumeBtn4 +=1;

    newBtnMinus4.classList.add('btn-amount-minus')
    newBtnMinus4.id = "btnminus4"

    newBtnPlus4.classList.add('btn-amount')
    newBtnPlus4.id = "btnplus4"

    newBtnMinus4.innerText = '-';
    newBtnPlus4.innerText = '+';

    let counter = document.createElement("p");
    counter.classList = "counter"
    counter.id = "cnt4"

    counter.innerHTML = volumeBtn4

    product4.appendChild(newBtnMinus4);
    product4.appendChild(newBtnPlus4);
    product4.appendChild(counter);
    btn4.remove();

    let btnminus4 = document.getElementById("btnminus4");
    btnminus4.addEventListener("click", function(){
        if(volumeBtn4 >= 1){
            volumeBtn4--;
            counter.innerHTML = volumeBtn4
        }
    if (volumeBtn4 == 0){
        MainBtn--;
        if(MainBtn == 0){
            tg.MainButton.hide();
        }
        newBtnMinus4.remove();
        newBtnPlus4.remove();
        counter.remove();
        product4.appendChild(btn4)
    }
    });

    let btnplus4 = document.getElementById("btnplus4");
    btnplus4.addEventListener("click", function(){
        if(volumeBtn4 >= 1){
            volumeBtn4++;
            counter.innerHTML = volumeBtn4
        }
    });

}
document.getElementById("btn5").onclick = function(){
    let btn5 = document.getElementById("btn5")

    let newBtnMinus5 = document.createElement("button");
    let newBtnPlus5 = document.createElement("button");
    volumeBtn5 +=1;

    newBtnMinus5.classList.add('btn-amount-minus')
    newBtnMinus5.id = "btnminus5"

    newBtnPlus5.classList.add('btn-amount')
    newBtnPlus5.id = "btnplus5"

    newBtnMinus5.innerText = '-';
    newBtnPlus5.innerText = '+';

    let counter = document.createElement("p");
    counter.classList = "counter"
    counter.id = "cnt5"

    counter.innerHTML = volumeBtn5

    product5.appendChild(newBtnMinus5);
    product5.appendChild(newBtnPlus5);
    product5.appendChild(counter);
    btn5.remove();

    let btnminus5 = document.getElementById("btnminus5");
    btnminus5.addEventListener("click", function(){
        if(volumeBtn5 >= 1){
            volumeBtn5--;
            counter.innerHTML = volumeBtn5
        }
    if (volumeBtn5 == 0){
        MainBtn--;
        if(MainBtn == 0){
            tg.MainButton.hide();
        }
        newBtnMinus5.remove();
        newBtnPlus5.remove();
        counter.remove();
        product5.appendChild(btn5)
    }
    });

    let btnplus5 = document.getElementById("btnplus5");
    btnplus5.addEventListener("click", function(){
        if(volumeBtn5 >= 1){
            volumeBtn5++;
            counter.innerHTML = volumeBtn5
        }
    });

}
document.getElementById("btn6").onclick = function(){
    let btn6 = document.getElementById("btn6")

    let newBtnMinus6 = document.createElement("button");
    let newBtnPlus6 = document.createElement("button");
    volumeBtn6 +=1;

    newBtnMinus6.classList.add('btn-amount-minus')
    newBtnMinus6.id = "btnminus6"

    newBtnPlus6.classList.add('btn-amount')
    newBtnPlus6.id = "btnplus6"

    newBtnMinus6.innerText = '-';
    newBtnPlus6.innerText = '+';

    let counter = document.createElement("p");
    counter.classList = "counter"
    counter.id = "cnt6"

    counter.innerHTML = volumeBtn6

    product6.appendChild(newBtnMinus6);
    product6.appendChild(newBtnPlus6);
    product6.appendChild(counter);
    btn6.remove();

    let btnminus6 = document.getElementById("btnminus6");
    btnminus6.addEventListener("click", function(){
        if(volumeBtn6 >= 1){
            volumeBtn6--;
            counter.innerHTML = volumeBtn6
        }
    if (volumeBtn6 == 0){
        MainBtn--;
        if(MainBtn == 0){
            tg.MainButton.hide();
        }
        newBtnMinus6.remove();
        newBtnPlus6.remove();
        counter.remove();
        product6.appendChild(btn6)
    }
    });

    let btnplus6 = document.getElementById("btnplus6");
    btnplus6.addEventListener("click", function(){
        if(volumeBtn6 >= 1){
            volumeBtn6++;
            counter.innerHTML = volumeBtn6
        }
    });

}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item1+"="+volumeBtn1*price_item1+" / "+item2+"="+volumeBtn2*price_item2+" / "+item3+"="+volumeBtn3*price_item3+" / "+item4+"="+volumeBtn4*price_item4+" / "+item5+"="+volumeBtn5*price_item5+" / "+item6+"="+volumeBtn6*price_item6);
});
