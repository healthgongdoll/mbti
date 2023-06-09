const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endpoint = 8; // end point
const result = document.querySelector("#result");
const select = [];

//Algorithm start
function calResult(){
    var pointArray = [
        {name: 'INFJ', value: 0, key: 0},
        {name: 'INTJ', value: 0, key: 1},
        {name: 'INFP', value: 0, key: 2},
        {name: 'INTP', value: 0, key: 3},
        {name: 'ENFJ', value: 0, key: 4},
        {name: 'ENFP', value: 0, key: 5},
        {name: 'ENTJ', value: 0, key: 6},
        {name: 'ENTP', value: 0, key: 7},
        {name: 'ISFJ', value: 0, key: 8},
        {name: 'ISFP', value: 0, key: 9},
        {name: 'ISTP', value: 0, key: 10},
        {name: 'ISTJ', value: 0, key: 11},
        {name: 'ESTJ', value: 0, key: 12},
        {name: 'ESTP', value: 0, key: 13},
        {name: 'ESFP', value: 0, key: 14},
        {name: 'ESFJ', value: 0, key: 15},
    ]

    for(let i = 0 ; i<endpoint; i++){
        var target = qnaList[i].a[select[i]];
        for(let j = 0; j < target.type.length; j++){
            for(let k = 0; k < pointArray.length; k++){
                if(target.type[j] === pointArray[k].name){
                    pointArray[k].value +=1;
                }
            }
        }
    }
    var resultArray = pointArray.sort(function (a,b){
        if(a.value > b.value){
            return -1;
        }
        if(a.value < b.value){
            return 1;
        }
        return 0;
    });
    console.log(resultArray);
    let resultword = resultArray[0].key;
    console.log(resultword);
    return resultword;
}

function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image'+point+'.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(()=> {
    
     result.style.WebkitAnimation = "fadeIn 1s";
     result.style.animation = "fadeIn 1s";
     setTimeout(()=>{
         qna.style.display = "none";
         result.style.display = "block";
     },450)
     console.log(select);
     setResult();
})}
function addAnswer(answerText,qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i<children.length;i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(()=>{
            select[qIdx] = idx;
            for(let i = 0; i < children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450 )
    },false);
}

function goNext(qIdx){
    if(qIdx === endpoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endpoint) * (qIdx+1) + '%';
}

function begin(){
   main.style.WebkitAnimation = "fadeOut 1s";
   main.style.animation = "fadeOut 1s";
   setTimeout(()=> {
   
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(()=>{
        main.style.display = "none";
        qna.style.display = "block";
    },450)
    let qIdx = 0;
    goNext(qIdx);
   },450);


}