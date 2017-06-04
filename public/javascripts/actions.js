var cookieNames = ['choc', 'outm', 'pist', 'rumr', 'cook'];

window.onload=function(){
  cookieNames.forEach(function(name) {
    Cookies.set(name, 0);
    $(`#${name}`).draggable({snap:"#bagclosed"});
  });
  //<---------- This Code is replaced with the function above ------------->
  // value = cookieNames.reduce(function(sum, name) {
  //   return(sum + Cookies.get(name));
  // }, 0);

  // let choc = $("#choc");
  // Cookies.set('choc','0');
  // let outm = $("#outm");
  // Cookies.set('outm','0');
  // let pist = $("#pist");
  // Cookies.set('pist','0');
  // let rumr = $("#rumr");
  // Cookies.set('rumr','0');
  // let cook = $("#cook");
  // Cookies.set('cook','0');
  // let arr =[];
  // var value = 0;
  // arr.push(choc,outm,pist,rumr,cook);
  // for(let i =0;i<arr.length;i++){
  //     arr[i].draggable({snap:"#bagclosed"});
  //     console.log(arr[i]);
  // }


};

//you can pass in an index for the childNodes[1] to find deeper childs in the tree

function script(){
  $("#bagclosed").droppable({
    drop:function(event,ui){
      $(this).attr('src','images/paperbagopen.png');
      //grab the id of the elment with the draggable attr
      var draggableId = ui.draggable.attr("id");
      let currentval = 0;
      //show me who is actually falling in the snap
      console.log(draggableId);

      //retreive the string value of the cookie and turn it into a string
      value =  parseInt(Cookies.get(draggableId));
      //show me the value of the cookie before augmentation
      console.log(value);
      value += 1;
      Cookies.set(draggableId,value);
      //value of the current cookie plus 1
      console.log(value);
      $(`#${draggableId}flavor`).text(value);
      var totaldecuenta = ($(".totalsdisplay").find("p"));
      for(let i = 0; i<5; i++){
          console.log("here is the count check :" + parseInt(totaldecuenta[i].innerText));
          currentval = currentval + parseInt(totaldecuenta[i].innerText);
      }
      console.log("here is the currentval: "+ currentval);
      $('total').text(currentval);
    }
  });
  $("#bagclosed").mouseenter(function(){
    $(this).attr('src','images/paperbagopen.png');
  });
  $("#bagclosed").mouseleave(function(){
    $(this).attr('src','images/paperbag.png');
  });
}

$(document).ready(script);

function resetcookies(){
  cookieNames.forEach(function(name) {
  Cookies.set(name, 0);
  $(`#${name}flavor`).text("0");
    });

      $('total').text("0");

};
