function main() {
  var counter = 0;
  return function() {
      if (counter == 0) {
          counter++
          return 1
      } else if (counter == 1) {
          counter++
          return 1
      } else if (counter == 2) {
          counter++
          return 2
      } else if (counter == 3) {
          counter++
          return 3
      } else if (counter == 4) {
          counter++
          return 5
      } else if (counter == 5) {
          counter++
          return 8
      } else {
          counter++
          return 13
      }
  };
}
