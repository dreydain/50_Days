const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 500}ms">${letter}</span>`)
        .join('')
})

//used javascript to add span tags to the labels.
//for each label grabing the inner html and then inner text,
//then spliting each letter into an array.
//next we map through each letter and the letter index in the array
//adding a span tag to each letter. using join to turn the letters with span into an a string.
//the inline stlye in the span tag uses the idx multipilied by 50ms to cause a transition delay that will move one letter at a time.
//Replace 50 with a different number to adjust the speed the greater the number the slower it will move. 