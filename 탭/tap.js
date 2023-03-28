/*
    a태그를 클릭했을때 
    li태그 on 클래스 이름을 추가
    + 다른 li 태그의 on 클래스는 제거
 */

// a태그 3개 > 배열
const btnList = document.querySelectorAll(".list .btn"); // 버튼인걸 모두 가져오기

// 버튼중 하나를 선택해서 event 추가
for(let i=0; i<btnList.length; i++){
    btnList[i].addEventListener("click",onTap);
}

// on 클래스를 li에 추가하는 함수
function onTap(e){

    /* a 태그를 사용할때, 새로고침 이벤트가 기본으로 있으므로 
       새로고침을 제거하고 사용 */
    
    e.preventDefault();  // 새로고침 기본동작 방지

    // li에 있는 on을 제거하기위해 btnList 사용
    for(let i=0; i<btnList.length; i++){
        // 한번에 하나의 요소만 "on" 클래스를 갖도록 부모요소에서 on 삭제
        // a 태그의 부모인 li 태그를 찾아서
        btnList[i].parentNode.classList.remove("on");
    }

    // on 클래스 추가
    // e.target은 이벤트가 발생한 태그자체
    // 이벤트를 붙여준 btnList[0], btnList[1], btnList[2] 중 하나
    e.target.parentNode.classList.add("on");
    console.log(e.target)

}


let btnlist = document.querySelectorAll(".btn_list .btn_a");

for(let i=0; i<btnlist.length; i++){
    btnlist[i].addEventListener("click",ontap);
}

function ontap(e){
    e.preventDefault();

    for(let i=0; i<btnlist.length; i++){
        // 한번에 하나의 요소만 "on" 클래스를 갖도록 부모요소에서 on 삭제
        // a 태그의 부모인 li 태그를 찾아서
        btnlist[i].parentNode.classList.remove("on");
    }
    e.target.parentNode.classList.add("on");
    console.log(e.target)

}