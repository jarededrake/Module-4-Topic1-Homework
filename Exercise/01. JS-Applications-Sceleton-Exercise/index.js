function solve(){
   document.getElementById("firstrow").addEventListener("click", function() {
      if(document.getElementById("firstrow").style.backgroundColor != "rgb(65, 63, 94)") {
      document.getElementById("firstrow").style.backgroundColor = "rgb(65, 63, 94)"
      }
      else if(document.getElementById("firstrow").style.backgroundColor = "rgb(65, 63, 94)") {
         document.getElementById("firstrow").removeAttribute("style");
      }
   })
   document.getElementById("secondrow").addEventListener("click", function() {
      if(document.getElementById("secondrow").style.backgroundColor != "rgb(65, 63, 94)") {
         document.getElementById("secondrow").style.backgroundColor = "rgb(65, 63, 94)"
         }
         else if(document.getElementById("secondrow").style.backgroundColor = "rgb(65, 63, 94)") {
            document.getElementById("secondrow").removeAttribute("style");
         }
   })
   document.getElementById("thirdrow").addEventListener("click", function() {
      if(document.getElementById("thirdrow").style.backgroundColor != "rgb(65, 63, 94)") {
         document.getElementById("thirdrow").style.backgroundColor = "rgb(65, 63, 94)"
         }
         else if(document.getElementById("thirdrow").style.backgroundColor = "rgb(65, 63, 94)") {
            document.getElementById("thirdrow").removeAttribute("style");
         }
   })
   document.getElementById("fourthrow").addEventListener("click", function() {
      if(document.getElementById("fourthrow").style.backgroundColor != "rgb(65, 63, 94)") {
         document.getElementById("fourthrow").style.backgroundColor = "rgb(65, 63, 94)"
         }
         else if(document.getElementById("fourthrow").style.backgroundColor = "rgb(65, 63, 94)") {
            document.getElementById("fourthrow").removeAttribute("style");
         }
   })
}
