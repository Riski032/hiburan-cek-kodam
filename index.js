// function kirim(nama,khodam){
// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };
  
// req.open("POST", "https://api.jsonbin.io/v3/b", true);
// req.setRequestHeader("Content-Type", "application/json");
// req.setRequestHeader("X-Access-Key", "$2a$10$x/7tY3MYoM6sKE9yiAsxjOQHrEPmSQJyGkONYixDZE1xTId9Chd0.");
// req.send('{"nama":'+nama+',"khodam" :'+khodam+'}');
// console.log('berhasil')}
function kirim(nama, khodam) {
    let req = new XMLHttpRequest();
  
    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {

      }
    };
  
    req.open("POST", "https://api.jsonbin.io/v3/b/", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Access-Key", "$2a$10$x/7tY3MYoM6sKE9yiAsxjOQHrEPmSQJyGkONYixDZE1xTId9Chd0.");
    // req.setRequestHeader("X-Collection-Id", "6676fac7ad19ca34f87d04ed");
  
    let data = {
      nama: nama,
      khodam: khodam
    };
  
    req.send(JSON.stringify(data));
    console.log('berhasil');
  }
  