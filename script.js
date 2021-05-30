//converting the date into the desired format
const getDateToday = () => {
  const date = new Date();

  return `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`;
};
// add date to the page
const renderContent = (response) => {
  const { data } = response;
   
  let content = document.getElementById("data").innerHTML;
  
  content += `
  <tr>
      <td>Наименование иностранной валюты</td>
      <td>Буквенный код валюты</td>
      <td>Количество единиц иностранной валюты</td>
      <td>Официальный курс</td>
    </tr>`;
  
  for (let i = 0; i < data.length; i++) {
    content += `
    <tr>
      <td>${data[i].Cur_Name}</td>
      <td>${data[i].Cur_Abbreviation}</td>
      <td>${data[i].Cur_Scale}</td>
      <td>${data[i].Cur_OfficialRate}</td>
    </tr>`;
  }

  document.getElementById("data").innerHTML = content;
};
// use API  nbrb and AXiOS
axios
  .get(
    "https://www.nbrb.by/api/exrates/rates?ondate=`${getDateToday()`&periodicity=0"
  )
  .then(renderContent);
