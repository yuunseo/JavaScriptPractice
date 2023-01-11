var Body = {
    setColor:function(color){
      document.querySelector('body').style.color=color;
    },
    SetBackgroungColor:function(color){
      document.querySelector('body').style.backgroundColor=color;
    },
    LinksetColor(color){
    var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
          console.log(alist[i]);
          alist[i].style.color=color;
          i += 1;
      }
  }

  }

  function nightday_button(self){
        
    var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.SetBackgroungColor('black');
      Body.setColor('white');
      self.value = 'day';
      Body.LinksetColor('powderblue');

    }else{
     Body.SetBackgroungColor('white');
      Body.setColor('black');
      self.value = 'night';
      Body.LinksetColor('blue');
    }
  }