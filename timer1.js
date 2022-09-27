let timeSet = process.argv.slice(2);

const timer = (timeList) => {
  console.log(`Inputed Time: [${timeList}]`);
  timeList.forEach(time => {
  	if(!isNaN(time) && time > 0) {
	  setTimeout(() => {
		console.log("Beep coming out...");
		process.stdout.write(`\x07`);
	  	console.log("Beeped");
      },(time * 1000));
    }
  });
}

timer(timeSet);
