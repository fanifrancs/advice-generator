let divider = document.querySelector('.divider'),
adviceRender = document.querySelector('.advice'),
button = document.querySelector('button'),
adviceNo =  document.querySelector('span'),
res, data, advice;

getAdvice();

setInterval(() => {
	if (window.innerWidth > '500') {
		divider.setAttribute('src', './assets/pattern-divider-desktop.svg');
	} else {
		divider.setAttribute('src', './assets/pattern-divider-mobile.svg');
	}
}, 1)

button.addEventListener('click', getAdvice);

async function getAdvice() {
  url = 'https://api.adviceslip.com/advice';
  try {
    res = await fetch(url, {cache: 'no-cache'});
    if (res.status === 200) {
      data = await res.text();
      advice = JSON.parse(data);
      renderAdvice(advice);
    } else {
      alert('Something went wrong')
    }
  } catch(error) {
    console.log(error);
  }
}

function renderAdvice(param) {
	adviceRender.innerText = `"${param.slip.advice}"`;
	adviceNo.innerText = `${param.slip.id}`;
}