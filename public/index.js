const about = ()=>{
    alert('hi');
}



function autocomplete(data) {
  document.getElementById("wikiTable").innerHTML= '';
   for (i = 0; i < data[1].length; i++) {
    document.getElementById("wikiTable").innerHTML += (
      "<tr><th id = 'titles'><a href='" + data[3][i] + 
      "'><span class = 'link'>" + data[1][i] + "</span></a></th><th><span class = 'info'>" + data[2][i] + 
      "</span></th></tr>"
    );
    
  }
}


document.getElementById('search-input').addEventListener('keyup', ()=> {
  let search = document.getElementById("search-input").value;
  let endpoint = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
  let endpoint2 = "&format=json&callback=wikiCallback";
  let wikiUrl = endpoint + search + endpoint2;
  
  $.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    //jsonp:"callback",
    success: function(data) {
    //   console.log(wikiUrl);
      autocomplete(data);
    }
  }).fail(function() {
    console.log("fail");
  });
});

