// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.

function getItemByAmount(data, amount){
    let price_arr = [];

    for(let item_price of data){        //data에 있는 상품의 가격을 price_arr에 담는다
        price_arr.push(item_price.price);
    }

    let min = Math.min.apply(null,price_arr);       //price_arr 중에서 최소값을 찾는다.

//    console.log(price_arr);       //price_arr 정상 출력 확인
//    console.log(min);

    if(isNaN(amount) || amount < min){      //유효한 숫자가 아니거나 최소값보다 작으면 null을 리턴
        return null;
    }

    let tmp={name:'default',price : 0};   //0으로 초기화 했기 때문에 최소금액의 물건보다 적은 금액이 입력되면 예외처리 필요

    for (let item_price of data){   //상품 목록 탐색
//        console.log(`${item_price['name']} : ${item_price['price']}`) //for문 정상 동작 확인
        if((item_price['price'] <= amount) && (tmp['price'] <= item_price['price'])){   //물건보다 비싸지 않으면서 가장 물건값과 비슷한 물건을 선택
            tmp=item_price;
        }
    }

    return tmp;
}