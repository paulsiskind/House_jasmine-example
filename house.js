function House(numberOfDoors,numberOfWindows){
    this.numberOfDoors= numberOfDoors;
    this.numberOfWindows= numberOfWindows;
    this.toString = function(){
      if ((numberOfDoors>1) && (numberOfWindows===1)){
        return 'The house has '+numberOfDoors+' doors and '+numberOfWindows+' window';

      }else if ((numberOfDoors>1)&&(numberOfWindows>1)){
        return ('The house has '+numberOfDoors+' doors and '+numberOfWindows+' windows');

      }else if ((numberOfDoors===1)&&(numberOfWindows>1)){
        return ('The house has '+numberOfDoors+' door and '+numberOfWindows+' windows');

      }else if ((numberOfDoors===1)&&(numberOfWindows===1)){
        return ('The house has 1 door and 1 window');

      }else if((numberOfDoors===0)&&(numberOfWindows===0)){
        return ('The house has 0 doors and 0 windows');
      
     
     }
    };
  }



    


module.exports = House;