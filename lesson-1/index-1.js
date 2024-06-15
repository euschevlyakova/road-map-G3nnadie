
function isHappyTicket(ticket) {
  const center = ticket.length / 2;
  
  let toCenter = 0;
  let afterCenter = 0;

  // toCenter
  for(let i = 0; i < center; i++) {
    toCenter += parseInt(ticket[i]);
  }

  // afterCenter
  for(let i = center; i < ticket.length; i++) {
    afterCenter += parseInt(ticket[i]);
  }

  if(toCenter === afterCenter) {
    return true;
  } else {
    return false;
  }

}

console.log(isHappyTicket('2341'));