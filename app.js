document.write(
    "<body style='background-color:#347576;' " +
      "</body>"
  );

var userWeather = prompt("Enter Your Area's Weather  " + "(including: cloudy, winter, sunny, summer, windy, rainy, autumn, spring, stormy, blizzard, cold, drizzle, fog, frost, hail, hurricane, lightning, monsoon, partly, snowy, tornado, hot, mild.)") 

if( userWeather ==="cloudy"){
    document.write(
        "<div class='card mx-auto ' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/cloudy.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Cloudy Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather === "winter"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none; '> " +
        "<img src='img/winter.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Winter Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="sunny"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/sunny.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Sunny Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="summer"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/summer.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Summer Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="windy"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/windy.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Windy Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="rainy"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/rainy.jpeg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Rainy Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="autumn"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/autumn.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Autumn Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="spring"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/spring.jpeg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Spring Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="stormy"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/stormy.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Stormy Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="blizzard"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/blizzard.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Blizzard Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="cold"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/cold.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Cold Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="drizzle"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/drizzle.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Drizzle Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="fog"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/fog.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Foggy Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="frost"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/frost.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Frosty Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="hail"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/hail.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Hail Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="hurricane"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/hurricane.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Hurricane Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="lightning"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/lightning.jpeg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Lightning Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="monsoon"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/monsoon.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Monsoon Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="partly"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/partly.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Partly Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="snowy"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/snowy.JPG' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Snowy Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="tornado"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/tornado.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Tornado Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="hot"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/hot.JPEG' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Hot Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else if(userWeather ==="mild"){
    document.write(
        "<div class='card mx-auto' style='width: 18rem; margin-top:17%; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none;'> " +
        "<img src='img/mild.jpg' class='card-img-top'> "+
        "<div class='card-body'>" +
          "<h5 class='card-title' style = 'text-align: center'>" + "Mild Weather" + "</h5>" +
        "</div>" +
        "</div>"
    )
}else{
    document.write(
        "<h1 style='text-align:center; margin-top:25%; color: white'>" +
        "Pagal samjha hai??"+
        "</h1>"
    )
}
