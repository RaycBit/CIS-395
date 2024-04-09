  // This function will create a cookie
  function setCookie(name, value, days)
  {
      var x = new Date();
      x.setTime(x.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = name + "=" + value + "; expires=" + 
      x.toGMTString() + "; path=/";
  }
  function getCookie(cookie2find)
  {
      var cookievalue = "", str = document.cookie;
      var cookie_array = str.split(";");
      for (var i = 0; i < cookie_array.length; i++)
      {
          var B = cookie_array[i].split("=");
          var c2f = "";
          if (i != 0)
              c2f = " " + cookie2find;
          else
              c2f = cookie2find;
          if (B[0] == c2f) {
              cookievalue = B[1];
              break;
          }
      }
      return cookievalue;
  }
  function getraw() {
      return document.cookie;
  }
  function create() {
      var days = 1;
      var cname = document.getElementById("cname");
      var cvalue = document.getElementById("cvalue");
      setCookie(cname.value, cvalue.value, days);
  }
  //Delete a cookie by setting a negative number of days
  function deleteCookie() {
      var cname3 = document.getElementById("cname3");
      setCookie(cname3.value, "", -1);
  }
  //Load the raw cookie data
  function raw() {
      document.getElementById("raw").value = getraw();
  }
  function findcookie() {
      var finditem = document.getElementById("cname2").value;
      document.getElementById("cvalue2").value = 
      getCookie(finditem);
  }
  function details() {
      var cookievalue = "", str = document.cookie;
      var cookie_array = str.split(";");
      var x = "<table style='width:75%;>"
      x += "<tr><th colspan='2'>COOKIE LISTENING</th></tr>";
      x += "<tr><th>Cookie Name</th>"
      x += "<th>Cookie Value</th></tr>";
      if (document.cookie.length != 0)
          for (var i = 0; i < cookie_array.length; i++)
          {
              var B = cookie_array[i].split("=");
              x += "<tr><td style='width:10;'>" + B[0] + "</td>"
              x += "<td style='width:10;'>" + B[1] + "</td></tr>";
          }
      x += "</table>";
      document.getElementById("info").innerHTML = x;
  }
  function clearbox(idname) {
      document.getElementById(idname).value = "";
  }