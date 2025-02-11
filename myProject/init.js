const memberData = [
  {id:'user01',pw:1111,name:'홍길동',responsibillity:'User'},
  {id:'user03',pw:1111,name:'김민서',responsibillity:'User'},
  {id:'user04',pw:1111,name:'관리자',responsibillity:'Admin'}
]
localStorage.setItem('memberData',JSON.stringify(memberData))