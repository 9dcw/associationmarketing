


function open_faq() {
  // get the data

    console.log('opening faq')
    questions = get_faq()
    console.log(questions)

  const myNode = document.getElementById('faq_questions')
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

  for (let i = 0; i < questions.length; i++) {
    let questionNode = document.createElement("div");
    questionNode.setAttribute("id","question"+String(i))

    //let questionText = document.createElement("h4")
    //questionText.setAttribute("class","fst-italic lh-1 mb-4")

    var questionLink = document.createElement('button');
    questionLink.setAttribute('class','btn btn-link p-0 align-baseline')
    questionLink.style.fontSize='1.2em'
    var linkText = document.createTextNode(questions[i]['question']);
    questionLink.appendChild(linkText);

    questionLink.title = "Open Answer " + String(i+1);
    onclickfn = 'toggleAnswer('+String(i)+')'
    questionLink.setAttribute('onclick', onclickfn);
    questionNode.appendChild(document.createElement('br'))
    questionNode.appendChild(questionLink);
    
    let answerText = document.createElement("p")
    answerText.setAttribute("id","answer"+String(i))
    answerText.innerHTML =questions[i]['answer']
    answerText.setAttribute
    answerText.style.display = "none"

    questionNode.appendChild(answerText)
    questionNode.appendChild(document.createElement('br'))

    var closer = document.createElement('button');
    closer.setAttribute('class','btn btn-link p-0 align-baseline')
    closer.style.fontSize='.8em'

    var linkText = document.createTextNode("close answer");
    closer.appendChild(linkText);
    closer.title = "close answer";
    onclickfn = 'toggleAnswer('+String(i)+')'
    closer.setAttribute('onclick', onclickfn);
    answerText.appendChild(document.createElement('br'))

    answerText.appendChild(closer);

    questionNode.appendChild(answerText)
    questionNode.appendChild(document.createElement('br'))
    questionNode.appendChild(document.createElement('br'))

    /*
    onclickfn = 'get_clip_with_podcast_index('+podcast_index+','+k+')'
    newlink.setAttribute('onclick', onclickfn);
    text = document.createTextNode('Try a clip!');
    newlink.appendChild(text);
    newlink.setAttribute('data-bs-dismiss', 'modal');

    */


    myNode.appendChild(questionNode);

  }}

function toggleAnswer(i) {
  let answer = document.getElementById('answer'+String(i))
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

  let question4 = {question: 'How does this work?',
                  answer: 'answer coming soon!'}
  questions.push(question4)


  return questions
}
