var Body = {
    setColor:function(color){
      // document.querySelector('body').style.color=color;
      $('body').css('color',color);
    },
    SetBackgroundColor:function(color){
      // document.querySelector('body').style.backgroundColor=color;
      $('body').css('backgroundColor',color);
    },
    LinksetColor(color){
    // var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length){
    //       console.log(alist[i]);
    //       alist[i].style.color=color;
    //       i += 1;
    //   }
      $('a').css('color',color);
  }

  }

function Nightday_button(self){
        
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Body.LinksetColor('powderblue');

  }else{
    Body.SetBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Body.LinksetColor('blue');
    }
  }