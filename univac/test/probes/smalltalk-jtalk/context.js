var context = (function() {
  function Context() {
      var instanceVariables = { };
      var localVariables = { };
      var argumentVariables = { };
      
      this.defineArgumentVariable = function (name) {
          argumentVariables[name] = true;
      };
      
      this.isArgumentVariable = function (name) {
          if (argumentVariables[name])
              return true;
              
          return false;
      }
      
      this.defineInstanceVariable = function (name) {
          instanceVariables[name] = true;
      };
      
      this.isInstanceVariable = function (name) {
          if (instanceVariables[name])
              return true;
              
          return false;
      };
      
      this.defineLocalVariable = function (name) {
          localVariables[name] = true;
      };
      
      this.isLocalVariable = function (name) {
          if (localVariables[name])
              return true;
              
          return false;
      };
  }

  function createContext() {
      return new Context();
  }

  return {
      createContext: createContext
  }
})();

// if (typeof module !== 'undefined' && module && module.exports)
  module.exports = context;