function Application() {
}

Application.prototype.myFunction = function() {
  
  //this will fail because null does not equal undefined
  return;

  //this will pass!
  // return null;
  
};