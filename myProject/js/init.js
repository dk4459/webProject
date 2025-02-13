const memberData = [
  {id:'user01',pw:1111,name:'관리자',responsibillity:'Admin'},
  {id:'user03',pw:1111,name:'김민서',responsibillity:'User'},
  {id:'user04',pw:1111,name:'홍길동',responsibillity:'Admin'}
]
const foodList = [
  {name : '갈비탕',src : 'img/갈비탕.jpg'},
  {name : '골뱅이무침',src : 'img/골뱅이무침.jpg'},
  {name : '국밥',src : 'img/국밥.jpg'},
  {name : '국수',src : 'img/국수.jpg'},
  {name : '김밥',src : 'img/김밥.jpg'},
  {name : '낚지볶음',src : 'img/낚지볶음.jpg'},
  {name : '김치찌개',src : 'img/김치찌개.jpg'},
  {name : '냉면',src : 'img/냉면.jpg'},
  {name : '돈가스',src : 'img/돈가스.jpg'},
  {name : '된장찌개',src : 'img/된장찌개.jpg'},
  {name : '떡볶이',src : 'img/떡볶이.jpg'},
  {name : '라멘',src : 'img/라멘.jpg'},
  {name : '라면',src : 'img/라면.jpg'},
  {name : '백반',src : 'img/백반.jpg'},
  {name : '불고기',src : 'img/불고기.jpg'},
  {name : '비빔밥',src : 'img/비빔밥.jpg'},
  {name : '삼겹살',src : 'img/삼겹살.jpg'},
  {name : '삼계탕',src : 'img/삼계탕.jpg'},
  {name : '샌드위치',src : 'img/샌드위치.jpg'},
  {name : '샐러드',src : 'img/샐러드.jpg'},
  {name : '스파게티',src : 'img/스파게티.jpg'},
  {name : '오므라이스',src : 'img/오므라이스.jpg'},
  {name : '육개장',src : 'img/육개장.jpg'},
  {name : '제육',src : 'img/제육.jpg'},
  {name : '짬뽕',src : 'img/짬뽕.jpg'},
  {name : '짜장면',src : 'img/짜장면.jpg'},
  {name : '치킨',src : 'img/치킨.jpg'},
  {name : '카레',src : 'img/카레.jpg'},
  {name : '파스타',src : 'img/파스타.jpg'},
  {name : '편의점도시락',src : 'img/편의점도시락.jpg'},
  {name : '피자',src : 'img/피자.jpg'},
  {name : '햄버거',src : 'img/햄버거.jpg'}
];
const resraurant =[
  {title:'버거킹 중앙대로점',address:'대구 중구 중앙대로 398 현대캐피탈 사옥 1층',category:'햄버거'},
  {title:'맘스터치 대구중앙로점',address:'대구 중구 중앙대로 389 1층',category:'햄버거'},
  {title:'oooa',address:'대구 중구 중앙대로 376-20',category:'햄버거'},
  {title:'맥도날드 대구교대DT',address:'대구 남구 중앙대로 225',category:'햄버거'},
  {title:'추억의점빵 얄개시대',address:'대구 중구 중앙대로 391 110호(동성로3가)',category:'햄버거'},
  {title:'킹스꼬마김밥 동성로점',address:'대구 중구 중앙대로 391 1층 131호(동성로3가, 애비뉴 8번가 )',category:'라면'},
  {title:'칸다소바 대구동성로점',address:'대구 중구 중앙대로 398-1',category:'라면'},
  {title:'멘야산다이메',address:'대구 중구 중앙대로 406-5 1층',category:'라면'},
  {title:'유타로 대구점',address:'대구 중구 중앙대로 406-4 1층 1호 유타로',category:'라면'},
  {title:'멘야큐',address:'대구 중구 중앙대로 379-4 1층',category:'라면'},
  {title:'국밥참맛있는집 대구동성로점',address:'대구 중구 중앙대로 376 1층',category:'국밥'},
  {title:'일품돼지국밥 종로점',address:'대구 중구 국채보상로 560 1층',category:'국밥'},
  {title:'국일따로국밥',address:'대구 중구 국채보상로 571',category:'국밥'},
  {title:'교동따로식당',address:'대구 중구 경상감영1길 11 1층',category:'국밥'},
  {title:'산더미 미성돼지국밥',address:'대구 중구 경상감영길 166-1 1층',category:'국밥'},
]
localStorage.setItem("storeList",JSON.stringify(resraurant));
localStorage.setItem('memberData',JSON.stringify(memberData));
localStorage.setItem('foodList',JSON.stringify(foodList));