/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 var calculatorModule = (function(){
    // initialize variables
    var total = 0;
    var memory = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    function doLoad(x){
      validateNumber(x);
      total = x;
    return total;
    }


  /**
   * Return the value of `total`
   * @return { Number }
   */

    function _getTotal(){
      return total;
    }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    function doAdd(x){
      validateNumber(x);
      total += x;
    }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    function doSubtract(x){
      validateNumber(x);
      total -= x;
    }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
    function doMultiply(x){
      validateNumber(x);
      total *= x;
    }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
    function doDivide(x){
      validateNumber(x);
      total /= x;
    }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    function getMemory(){
      return memory;
    }


  /**
   * Stores the value of `total` to `memory`
   */
    function totalToMemory(){
      memory = total;
    }


  /**
   * Clear the value stored at `memory`
   */
    function clearMem(){
      memory = 0;
    }

  /**
   * Validation
   */

    function validateNumber(theNumber){
      if(typeof theNumber != "number"){
        throw Error('Error');
      }
    }

      //
    return {
      load: doLoad,
      add: doAdd,
      subtract: doSubtract,
      multiply: doMultiply,
      divide: doDivide,
      recallMemory: getMemory,
      saveMemory: totalToMemory,
      clearMemory: clearMem,
      getTotal: _getTotal
    };
  });