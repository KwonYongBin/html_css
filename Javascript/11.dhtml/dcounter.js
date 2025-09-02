//최초로 호출되는 함수 : Window.onload(), window.addEventListener()..
addEventListener('DOMContentLoaded', function () {
    initForm();
});

//화면 폼 함수
function initForm() {
    let output =
        `
        <h1>Counter</h1>
        <div>
            <h2 id="number">0</h2>
            <button class="button" type="button" data-operation="increment">increment(+)</button>
            <button class="button" type="button" data-operation="decrement">decrement(-)</button>
        </div>
    `;
    document.querySelector("#content").innerHTML = output;

    //버튼 이벤트 적용
    let buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let number = document.querySelector("#number").textContent;
            let type = button.dataset.operation;

            if (type === 'increment') {
                document.querySelector("#number").textContent = ++number;
            } else if (type === 'decrement') {
                document.querySelector("#number").textContent = --number;
            }

        });
    });
}