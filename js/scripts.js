


function open_faq() {
  // get the data

    console.log('opening faq')
    questions = get_faq()
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

function get_faq() {
  let questions = new Array()

  let question1 = {question: 'Who is this for?',
                  answer: 'answer coming soon!'}

  questions.push(question1)

  let question2 = {question: 'Can associations make money?',
                  answer: 'answer coming soon!'}
  questions.push(question2)

  let question3 = {question: 'How much money?',
                  answer: 'answer coming soon!'}
  questions.push(question3)

  let question4 = {question: 'How much money?',
                  answer: 'answer coming soon!'}



  return questions
}
