let members = JSON.parse(localStorage.getItem('memberData'));
    let info = document.querySelector('.header-social-links')
    let a = document.createElement('a');
    a.textContent=`${members[0].name}님 환영합니다.`;
    a.classList='text-white';
    info.appendChild(a);

    function pageGo(e){
        e.preventDefault()
        console.log(members[0].responsibillity)
        if(members[0].responsibillity=='Admin'){
            location.href='foodManager.html';
        }else{
            alert('해당 권한이 없습니다.')
        }
    }
        
