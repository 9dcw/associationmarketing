

var faq_data = null;

window.onload = function DOMContentLoaded() {
  faq_data = get_faq();

  }

async function open_faq() {
  // get the data

    console.log('opening faq')
    questions = await get_faq()
    toggleElement('accordionFlushExample')
    console.log(questions)

    const myNode = document.getElementById('accordionFlushExample')
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }

  for (let i = 0; i < questions.length; i++) {


    itemNode = document.createElement('div')
    itemNode.setAttribute("class","accordion-item")

    hNode = document.createElement('h2')
    hNode.setAttribute("id","flush-heading"+String(i+1))
    hNode.setAttribute("class","accordion-header")

    btn = document.createElement('button')
    btn.setAttribute("type","button")
    btn.setAttribute("class","accordion-button collapsed")
    btn.setAttribute("data-bs-toggle","collapse")
    btn.setAttribute("data-bs-target","#flush-collapse"+String(i+1))
    btn.setAttribute("aria-expanded","false")
    btn.setAttribute("aria-controls","#flush-collapse"+String(i+1))
    btn.innerHTML = questions[i]['question']
    hNode.appendChild(btn)
    itemNode.appendChild(hNode)

    answerNode = document.createElement('div')

    answerNode.setAttribute("id","flush-collapse"+String(i+1))
    answerNode.setAttribute("class","accordion-collapse collapse")
    answerNode.setAttribute("aria-labelledby","flush-heading"+String(i+1))
    answerNode.setAttribute("data-bs-parent","#accordionFlushExample")

    answerBody = document.createElement('div')
    answerBody.setAttribute("class","accordion-body")
    answerBody.innerHTML = questions[i]['answer']
    answerNode.appendChild(answerBody)

    itemNode.appendChild(answerNode)
    myNode.appendChild(itemNode)
  }}

function toggleElement(el) {

  let answer = document.getElementById(el)
  if (answer.style.display === "none") {
    answer.style.display = "inline"
  }
  else {
      answer.style.display = "none";
    }

}

async function get_faq() {

  console.log('checking faq')
  if (faq_data != null) {
    console.log('already got faq!')

    return faq_data
  }
  console.log('getting faq')

  let questions = new Array()
  url = 'https://meaningful-texting-aqtiusbaaq-uc.a.run.app/faq_content'

  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  }).then(function(response) {
    return response.json()
  })

  return response
}

function checkemail() {
  var emailText = document.getElementById('email').value
  var valid = ValidateEmail(emailText)
  var submitbtn = document.getElementById('submitButton')
  var errortext = document.getElementById('invalidEmail')
  var successtext = document.getElementById('validEmail')

  var formNotice = document.getElementById('emailFormNotice')
  //console.log(emailText)
  if (!emailText) {
      formNotice.style.display='inline'
      errortext.style.display='none'
      successtext.style.display='none'
      submitbtn.setAttribute('class','btn btn-primary')
      submitbtn.disabled = true
      return
  }
  else {
    formNotice.style.display='none'
  }
  if (valid=== true) {
    errortext.style.display='none'
    successtext.style.display='inline'
    submitbtn.setAttribute('class','btn btn-primary')
    submitbtn.disabled = false

  }
  else {

    errortext.style.display='inline'
    successtext.style.display='none'
    submitbtn.setAttribute('class','btn btn-primary')
    submitbtn.disabled = true

  }

}


function submitEmail() {
  sender = document.getElementById('email').value
  console.log('submitting email '+ sender)
  let form = new FormData();
  form.append('sender',sender);

  fetch('https://meaningful-texting-aqtiusbaaq-uc.a.run.app/email_signup', {
      method: 'POST',
      body: form
  })
      .then(function(response) {

          console.log('received clip')
          document.getElementById('submitSuccessMessage').style.display='inline'
          return response.text()
      } )
      .catch(function(error) {
        document.getElementById('submitErrorMessage').style.display='inline'

        console.log('error ' + String(error))
        }
      )


}

function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    //alert("You have entered an invalid email address!")
    return (false)
}
