//member.js
let members = JSON.parse(localStorage.getItem('members'));
console.log(members)
//현재 members의 값을 활용
members.forEach(function(elem,idx,ary){
  document.querySelector('#list').innerHTML += makeRow(elem);
})

// id, pw, name 속성을 활용해서 tr>td*3를만들어주는 함수
function makeRow(item = {}){
  let str= '';
  str += '<tr>'
  for(let prop in item){
    str += '<td>' + item[prop] + '</td>'
  }
  str += '</tr>';
  return str; //생성된 tr>td*3반환
}

//form.submit 이벤트
document.forms.addMember.addEventListener('submit',function(e){
  e.preventDefault();
  let id = document.querySelector('input[name=user_id]').value;
  let pw = document.querySelector('input[name=user_pw]').value;
  let name = document.querySelector('input[name=user_name]').value;

  let newItem = makeRow({id,pw,name})
  document.querySelector('#list').innerHTML += newItem;
  //로컬스토리지 담기
  members.push({id,pw,name})
  localStorage.setItem('members',JSON.stringify(members));
});