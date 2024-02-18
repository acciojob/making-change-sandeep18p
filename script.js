const makeChange = (c) => {
 const quarters = Math.floor(c / 25); // Number of quarters
  c %= 25; // Update c to the remainder after using quarters

  const dimes = Math.floor(c / 10); // Number of dimes
  c %= 10; // Update c to the remainder after using dimes

  const nickels = Math.floor(c / 5); // Number of nickels
  c %= 5; // Update c to the remainder after using nickels

  const pennies = c; // Remaining pennies

  return { "q": quarters, "d": dimes, "n": nickels, "p": pennies };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
