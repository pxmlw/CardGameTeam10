
$(function() {
//    var count = 0;
//   var array = [];
//   var randomIndex=0;
//   var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81]
//   var current = [];
          $.getJSON("api/Card").done(function(result){
              console.log((JSON.stringify(result)))
          for (var i in result)
          $("#"+i.id).append("<img id="+i+" src='images/cards/"+i.id+".gif' width='100' height='100' value='test' />");
          })   
          });
                  $.get("api/login")
                          .done(function() {
                              
                  });


//    $("a").each(function()
//    {
//         
//        function rand(n) {
//            return (Math.random() * n)|0;
//        }
//        
//        //randomIndex = Math.floor(Math.random() * 80) +1 ;
//        if (!current.length) current = numbers.slice();
//            randomIndex = current.splice(rand(current.length), 1);
//        
//        
//        $(this).append("<img id="+randomIndex+" src='images/cards/"+randomIndex+".gif' width='100' height='100' value='test' />");
//        
        
        
//      while (randomNumbers.Contains(number));

//        randomNumbers.Add(number);
    
//    });
    
//    $("img").on("click", function () {
//        if (count>3)
//        { this.onclick=false;}
//        count++;
//         // $(this).toggleClass('border-highlight');
//        $(this).toggleClass('selected');
//        //$(this).fadeIn('slow');
//      
//        $(this).blur();
//        console.log(this.id)
//         array[count-1]= this.id
//        
//    
//        console.log(array);
//        if(count==3){
//        alert("3 clicks done");
//            //var cards = {
//            var jsonString = JSON.stringify(array);
//            console.log(jsonString);
//            
//            
//             $.ajax({
//            url: '/CardGame/test/PersonSubmit',
//            type: 'post',
//            dataType: 'json',
////            success: function (data) {
////                $('#target').html(data.msg);
////            },
//            data: {img1 : array[0] , img2 : array[1] , img3 : array[2]}
//        });
//            
//            
//            
//        }
//           
//        });
            




  
