const people = (x, y) => { 
  
  
  return x*y }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#itemsPerBag').checkValidity() && document.querySelector('#bags').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
    const i = parseInt(document.querySelector('#itemsPerBag').value)
    const j = parseInt(document.querySelector('#bags').value)
    const final= people(i,j);
    
    const ans = `${s}, your total number of items is = ${final}`

    document.querySelector('#result').innerHTML = ans
  }
}



// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'itemsPerBag') ||
    (event.target && event.target.id === 'bags')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})

