function addLink() {
    const element = document.createElement("a");
    element.setAttribute("href", "https://diveintocode.jp/");
    element.innerText = "DPro";
    const parentElement = document.getElementsByTagName("div")[0];
    parentElement.appendChild(element);
  };
  
  // Función agregada para mostrar URL

  function removeLink() {
    const link = document.getElementsByTagName("a")[0];
    link.removeAttribute("href");
  }
  
  window.onload = function() {
    addLink();
    removeLink();
  }
  function operateCSS() {
    const element = document.getElementsByTagName("h1")[0];
    element.style.fontSize="50px";
  };
  
  window.onload = operateCSS;
  function clickBtn() {
    const button = document.getElementById("btn");
    button.addEventListener("click", function() {
      alert("hizo clic");
    });
  };
  
  window.onload = clickBtn;
  const parent = $("#parent");
console.log(parent)
$(function(){
    $("h1").addClass("background_pink");
  });
  $(function(){
    $("#btn").click(function() {
      $(this).text("クリックされました")
    });
  });