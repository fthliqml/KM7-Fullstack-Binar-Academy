function filterCarByAvailability(cars) {
  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let index = 0; index < cars.length; index++) {
    if (cars[index].available == true) {
      result.push(cars[index]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
