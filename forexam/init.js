//init.js
//상품,회원 변수 초기값 지정.
/*
* 상품코드
  상품명
  상품가격
  평점
  이미지
  할인율
  --회원
  회원아이디
  회원비밀번호
  회원이름
  권한
*/
const productData = [
  {prodCode: 'P001',prodName:'사과',price:2000,likeIt:4,image:'image/apple.jpg',sale:15},
  {prodCode: 'P002',prodName:'수박',price:12000,likeIt:3,image:'image/watermelon.jpg',sale:10},
  {prodCode: 'P003',prodName:'복숭아',price:3000,likeIt:5,image:'image/peach.jpg',sale:0}
]
const memberData = [
  {id:'user01',pw:1111,name:'홍길동',responsibillity:'User'},
  {id:'user03',pw:1111,name:'김민서',responsibillity:'User'},
  {id:'user04',pw:1111,name:'황주연',responsibillity:'Admin'}
]
const cartData= [
  {id:'user01',product:'P001',qty:3},
  {id:'user02',product:'P002',qty:1},
  {id:'user03',product:'P003',qty:5},
  {id:'user01',product:'P001',qty:2}

]