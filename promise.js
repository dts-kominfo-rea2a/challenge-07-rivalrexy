const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let promiseTheater1 = await promiseTheaterIXX();
    let promiseTheater2 = await promiseTheaterVGC();
    let promiseTheaterArr = [];
    let marahTotal = 0;
    let tidakMarahTotal = 0;
    for (let counter = 0; counter < promiseTheater1.length; counter++) {
      promiseTheaterArr.push(promiseTheater1[counter].hasil);
    }
    for (let counter = 0; counter < promiseTheater2.length; counter++) {
      promiseTheaterArr.push(promiseTheater2[counter].hasil);
    }
    for (let counter = 0; counter < promiseTheaterArr.length; counter++) {
      if (promiseTheaterArr[counter] === "marah") {
        marahTotal++;
      } else {
        tidakMarahTotal++;
      }
    }
    if (emosi === "marah") {
      return marahTotal;
    } else {
      return tidakMarahTotal;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
