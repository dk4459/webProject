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
      location.href='home.html';
      return;
    }
  }
  alert('비밀번호가 일치하지 않습니다.')
  
});

document.querySelector('#findPw').addEventListener('click',function(e){
  e.preventDefault();
  e.stopPropagation();
  let email = document.querySelector('#emailId').value
  let password ='';
  let name=''
  let exist = false;
  console.log(members)
  for(let member of members){
      if(member.id==email){
         password=member.pw;
         name=member.name;
         exist= true;
      }
  }
  if(!exist){
    alert('조회된 아이디가 없습니다.')
  }else {
    emailjs.init("AB8LR3d45ddN3Li3L"); //publicKey 입력

    var templateParams = {
        from_name: "예담",  // 발신자 이름
        to_name: name,    // 수신자 이름
        message: password,  // 메시지 내용
        to_email: email,  // 수신자 이메일
    };
    emailjs.send("service_p24nijl", "template_g5tj2jk", templateParams)
        .then(function (response) {
            alert('해당이메일로 비밀번호를 전송하였습니다.')
            console.log("메일 전송 성공!", response);
        }, function (error) {
            console.log("메일 전송 실패", error);
        });
  }

})

