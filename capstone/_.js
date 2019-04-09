const _ = {
  
    clamp: (number, lower, upper) => {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    
    inRange: (number, start, end) => {
      if(end === undefined) {
        end = start;
        start = 0;
      }
      if(start > end) {
        const tmp = start;
        start = end;
        end = tmp;
      }
      const isInRange = (number >= start && number < end);
      return isInRange;
    },
    
    words: string => string.split(' '),
    
    pad: (string, length) => {
      if(length <= string.length) {
        return string;
      }
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length - string.length - startPaddingLength;
      const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;
    },
    
    has: (object, key) => (object[key] !== undefined),
    
    invert: object => {
      let invertedObject = {};
      for(const key in object) {
        const originalValue = object[key];
        invertedObject[originalValue] = key;
          }
      return invertedObject;
    },
    
    findKey: (object, predicateFunction) => {
        for(const key in object) {
        let value = object[key];
        let predicateFunctionReturnValue = predicateFunction(value); 
          if(predicateFunctionReturnValue) {
          return key;
        }
        }
      return undefined;
      },
    
    drop: (array, number) => {
      if(number === undefined) {
        number = 1;
      }
      return array.slice(number);
    },
    
    dropWhile: (array, predicateFunction) => {
      const dropNumber = array.findIndex((el, idx) => !predicateFunction(el, idx, array));
      const droppedArray = _.drop(array, dropNumber);
      return droppedArray;
    },
    
    chunk: (array, size) => {
      if(size === undefined) {
        size = 1;
      }
      let arrayChunks = [];
      for (let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
    
  };
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;