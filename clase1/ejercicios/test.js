function saludar(quien, aquien, callback){
	return callback("Hola! " + aquien + ", soy " + quien);
}
function division(x, y, callback) {
  setTimeout(
    () => {
      if (y === 0) {
        return callback(new Error('Division by zero'));
      }

      callback(null, x / y);
    },
    3000
  );
}

division(5,2,(err,result)=>{
	if(err){
		console.log(err);
	}
	console.log(result);
});

saludar("tincho", "Luisi y Martu", function(result){
	console.log(result);
});

function ioDivisionPromisified(x, y) {
  // Retorna un nuevo objeto promise
  return new Promise((resolve, reject) => {
    // Invocamos a la funcion original pasandole el callback como lo requiere
      if (y===0) {
        // Si ocurre un error llamamos a reject (con early return)
        return reject(new Error("division by ZERO"));
      }

      // Si esta todo bien llamamos a resolve pasando el resultado
      resolve(x / y);
  });
}

ioDivisionPromisified(10, 2)
  .then(result => {
    return `El resultado es : ${result}`;
  })
  .then(message =>{
	  console.log(message);
  })
  .catch(error => {
    console.log('Error!: ', error);
  });