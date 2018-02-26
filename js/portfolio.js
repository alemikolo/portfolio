$(document).ready(insertDate);

 /**
   * @description Insert year to the website footer
   */
function insertDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const startYear = 2018;
  if (year > startYear) {
    $('#years').html(startYear + '–' + year);
  } else {
    $('#years').html(startYear);
  }
}
