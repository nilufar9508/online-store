let basket_json = [
    {
        'img':'ice-cream/01.png',
        'name':'Zolotoy',
        'price':15000,
        'count':3,
        'total price':45000
    },
    {
        'img':'chocolate/04.png',
        'name':'Kit Kat',
        'price':12000,
        'count':1,
        'total price':12000
    },
    {
        'img':'drink/03.png',
        'name':'coca-cola',
        'price':14000,
        'count':3,
        'total price':42000
    },
    {
        'img':'chocolate/13.png',
        'name':'Alpen Gold',
        'price':13000,
        'count':3,
        'total price':39000
    },
]


let boxes=document.querySelector('.boxes')

for(let i=1; i<=4; i++){
    let div =document.createElement('div')
    div.classList.add('box')
    div.innerHTML=`
    <div class="box">
<img src="../media/${basket_json[i]['img']}" alt="">
<p>${basket_json[i]['name']}</p>
<p>${basket_json[i]['price']}</p>
<p>count:${basket_json[i]['count']}</p>
<p>total price:${basket_json[i]['total price']}</p>
<button class="minus">-</button>
<button>delete</button>
   </div>
    `
 boxes.appendChild(div)
}