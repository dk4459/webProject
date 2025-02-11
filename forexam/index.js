//index.js
let members=[
  { id: 'user01',pw:'1111',name:'홍길동' },
  { id: 'user02',pw:'2222',name:'김민서' },
  { id: 'user03',pw:'3333',name:'최유진' }
]
let members_json = JSON.stringify(members);
//회원정보.
localStorage.setItem('members',members_json);


//연습
let name = "Hongkildong";
localStorage.setItem('name', 'Hongkildong');
console.log(localStorage.getItem('name'));

//json문자열.
let json = `[{"name" : "Hongkildon" 
          , "age" :20},
          {"name" : "shin" 
          , "age" :212}
          ] `;
//문자열 -> 객체
let obj = JSON.parse(json);
console.log(obj.name)
//이방법 써라
localStorage.setItem('friend', json);
let info = localStorage.getItem('friend')
console.log(JSON.parse(info)[1].name);

//이방법안됨
// localStorage.setItem('friend2',obj);
// let info2 = localStorage.getItem('friend2');
// console.log(info2);

// 객체 -> 문자열
obj = {
  name: '홍길동',
  friends: [{
    name: '김민수',
    phone: '010-1111'
  },
  {
    name: '박현수',
    phone: '010-2222'
  }]
}
json = JSON.stringify(obj);
console.log(json);
localStorage.setItem('myfriend',json);