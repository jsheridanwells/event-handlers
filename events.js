let outputTarget = document.getElementById('output-target');

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
let sections = document.getElementsByTagName('section');

for(let i = 0; i < sections.length; i++) {
	sections[i].addEventListener('click', function() {
		outputTarget.innerText = `You clicked on the ${this.innerText} section`;
	});
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
let header = document.getElementById('page-title');
header.addEventListener('mouseover', function(){
	outputTarget.innerText = 'You moved your mouse over the header';
});

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
header.addEventListener('mouseout', function(){
	outputTarget.innerText = 'You left me!!';
});

// When you type characters into the input field, the output element should mirror the text in the input field.
let inputField = document.getElementById('keypress-input');
inputField.addEventListener('keyup', function() {
	outputTarget.innerText = inputField.value;
});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
let addColor = document.getElementById('add-color');
let gPig = document.getElementById('guinea-pig');
addColor.addEventListener('click', function() {
	gPig.classList.add('blue');
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
let hulk = document.getElementById('make-large');
hulk.addEventListener('click', function(){
	gPig.classList.add('hulkify');
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
let capture = document.getElementById('add-border');
capture.addEventListener('click', function() {
	gPig.classList.add('capture');
});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
let rounded = document.getElementById('add-rounding');
rounded.addEventListener('click', function() {
	gPig.classList.add('rounded');
});

