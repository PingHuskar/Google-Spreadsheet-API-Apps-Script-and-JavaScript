const url = 'https://script.google.com/macros/s/AKfycbyIg7_nd5CKGclUKaI9LoXG6cNBTshiqc3O9l3IKs9Tu07i-TiYXigAKT8OmQNQraCKpw/exec'

const output = document.querySelector('.output')
const btnSave = document.querySelector('.saver')
const btnReset = document.querySelector('.reset')
const btnReload = document.querySelector('.ref')
const iName = document.querySelector('input[name=name]')
const iMes = document.querySelector('input[name=message]')
const repMessage = document.querySelector('.rep')
btnSave.addEventListener('click', sData)
btnReload.addEventListener('click', getData);

function sData(e) {
  e.preventDefault()
  repMessage.textContent = "Sending"
  let val1 = iName.value || 'unknown'
  let val2 = iMes.value || 'Message'
  iName.style.display = 'none'
  iMes.style.display = 'none'
  btnSave.style.display = 'none'
  btnReset.style.display = 'none'
  let arr = [val1, val2]
  let formData = new FormData()
  formData.append('data', JSON.stringify(arr))
  fetch(url, {
    method: 'POST'
    , body: formData
  })
  .then((rep) => rep.json())
  .then((data) => {
    // console.log(data)
    btnSave.style.display = 'inline'
    btnReset.style.display = 'inline'
    iName.style.display = 'inline'
    iMes.style.display = 'inline'
    repMessage.textContent = "Submitted id:" + data.id
    
    getData();
  })
  .catch(err => alert(err))
}
 
function getData() {
  output.innerHTML = "loading..."
  fetch(url)
  .then((rep) => rep.json())
  .then((data) => {
    console.clear()
    console.log(data)
    output.innerHTML = ""
    data.posts.forEach((val) => {
      console.log(val)
      let li = document.createElement('li')
      li.innerHTML = `${val[0]} ${val[1]} ${val[2]}`
      output.appendChild(li)
    })
  })
}

getData()