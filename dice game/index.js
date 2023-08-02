document.getElementById("btn").addEventListener("click", changeImage);

function randomnNumber() {

    let n = Math.random();
    n = (n * 6) + 1;
    n = Math.floor(n);
    return n;

}


function changeImage() {
    let a = randomnNumber();

    // console.log(a);
    let b = randomnNumber();

    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");



    switch (a) {
        case 1:
            image1.src = "./images/dice1.png";
            break;
        case 2:
            image1.src = "./images/dice2.png";
            break;

        case 3:
            image1.src = "./images/dice3.png";
            break;

        case 4:
            image1.src = "./images/dice4.png";
            break;

        case 5:
            image1.src = "./images/dice5.png";
            break;

        case 6:
            image1.src = "./images/dice6.png";
            break;

        default:
            break;
    }


    switch (b) {
        case 1:
            image2.src = "./images/dice1.png";
            break;
        case 2:
            image2.src = "./images/dice2.png";
            break;

        case 3:
            image2.src = "./images/dice3.png";
            break;

        case 4:
            image2.src = "./images/dice4.png";
            break;

        case 5:
            image2.src = "./images/dice5.png";
            break;

        case 6:
            image2.src = "./images/dice6.png";
            break;

        default:
            break;
    }


    if(a>b){

        document.getElementById("winner").innerHTML="Player 1 Win's 🚩🚩";

    }else{
        document.getElementById("winner").innerHTML="Player 2 Win's 🚩🚩";


    }

}