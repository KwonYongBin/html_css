export default function initForm(initArray){
    return initArray.reduce((acc, cur) => { //reduce함수 호출
        acc[cur]='';
        return acc;
    }, {});
}