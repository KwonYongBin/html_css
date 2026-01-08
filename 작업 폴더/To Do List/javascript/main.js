const inputBox = document.querySelector(".inputField input"),
      addBtn = document.querySelector(".inputField button"),
      todoList = document.querySelector(".todoList"),
      deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value; //사용자 입력 값 가져오기
  if(userEnteredValue.trim() != 0){ //사용자 값이 공백이 아닌 경우
    addBtn.classList.add("active"); //추가 버튼을 활성화
  }else{
    addBtn.classList.remove("active"); //추가 버튼을 비활성화
  }
}

showTasks(); //showTask 함수를 호출

addBtn.onclick = () => { //사용자가 더하기 아이콘 버튼을 클릭할 때
  let userEnteredValue = inputBox.value; //입력 필드 값 가져오기
  let getLocalStorageData = localStorage.getItem("New Todo"); //로컬 저장소 가져온다
  if(getLocalStorageData == null){ //로컬 저장소에 데이터가 없는 경우
    listArray = []; //빈 배열 만들기
  }else{
    listArray = JSON.parse(getLocalStorageData);  //json 문자열을 javascript로 변환
  }
  listArray.push(userEnteredValue); //배열에서 새 값 푸시 또는 추가
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //javascript로 개체를 json 문자열로 변환
  showTasks(); //함수 호출
  addBtn.classList.remove("active"); //작업이 추가되지 않으면 추가 버튼을 비활성화
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");//로컬 저장소 가져온다
  if(getLocalStorageData == null){//로컬 저장소에 데이터가 없는 경우
    listArray = [];//빈 배열 만들기
  }else{
    listArray = JSON.parse(getLocalStorageData); //json 문자열을 javascript로 변환
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //보류 중인 작업에서 배열 길이 표시
  if(listArray.length > 0){ //배열 길이가 0보다 큰 경우
    deleteAllBtn.classList.add("active"); //삭제 버튼을 활성화
  }else{
    deleteAllBtn.classList.remove("active"); //삭제 버튼을 비활성화
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //UL 태그 안에 새 태그 추가
  inputBox.value = ""; //작업이 추가되면 입력 필드를 공백으로 둔다
}

// 작업 기능 삭제
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //li 삭제 또는 제거
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //함수 호출
}

// delete all tasks function
deleteAllBtn.onclick = () => {
  let getLocalStorageData = localStorage.getItem("New Todo"); //로컬 저장소 가져오기
  if(getLocalStorageData == null){ //로컬 저장소에 데이터가 없는 경우
    listArray = []; //빈 배열 만들기
  }else{
    listArray = JSON.parse(getLocalStorageData); //json 문자열을 js 개체로 변환
    listArray = []; //create a blank array
  }
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //로컬 저장소에 항목 설정
  showTasks(); //함수 호출
}
