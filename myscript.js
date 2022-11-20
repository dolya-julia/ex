$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
    history.pushState({is_popup_opened: true}, "First work | Отправка на почту", "/index.html/popup");
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
    history.back(); // 
}
// Обработка события нажатия кнопки назад в браузере
window.onpopstate = (event) => {
    if (state != null)
    if (event.state["is_popup_opened"]) {
        PopUpHide();
    }
};