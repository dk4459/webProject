let members = JSON.parse(localStorage.getItem('memberData'));
console.log(members)
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", function(e){
  e.preventDefault();
  let id = document.querySelector('#form1>input:nth-of-type(1)').value;
  let pw = document.querySelector('#form1>input:nth-of-type(2)').value;
  let name = document.querySelector('#form1>input:nth-of-type(3)').value;
  let responsibillity = 'User'
  if(id.length>0&&pw.length>0&&name.length>0){
  members.push({id,pw,name,responsibillity})
  alert('등록이 완료되었습니다.')
  }else{
    alert('값을 다입력하세요')
  };
});

secondForm.addEventListener("submit",function(e){
  e.preventDefault();
  let id = document.querySelector('#form2>input:nth-of-type(1)').value;
  let pw = document.querySelector('#form2>input:nth-of-type(2)').value;
  for(let member of members){
    if(member.id == id && member.pw == pw){
      members = [
                  {id:member.id,pw:member.pw,
                  name:member.name,responsibillity:member.responsibillity}
                ]
      localStorage.setItem('memberData',JSON.stringify(members))
      window.open('home.html');
      return;
    }
  }
  alert('비밀번호가 일치하지 않습니다.')
  
});

