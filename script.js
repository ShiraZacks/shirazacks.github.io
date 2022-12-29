
function colorChange(colors) {
    //element has class "test"
    let text = document.querySelector('.test');
    //need too split the text into individual spans
    const textSplit = text.innerText.split('');
    const arrDom = [];
    let colorIndex = 0;
    textSplit.forEach(function (e) {
        arrDom.push(`<span ${e === ' ' ? '' : ` data-color=${colors[colorIndex]} `}>${e}</span>`)
        /*Counter for the number of colors*/
        colorIndex >= colors.length - 1 ? colorIndex = 0 : colorIndex++;
    });
    text.innerHTML = arrDom.join('');

    const letters = text.childNodes

    // Hover
    letters.forEach(function (e) {
        e.addEventListener('mouseover', function (e) {
            // On hover, add a flag that the cursor is inside the parent element
            if (!text.hasAttribute('data-flag')) {
                // If there is no flag, then add
                text.setAttribute('data-flag', '')
                // Create an empty array and add all the elements there
                let arrNode = [],
                    plusColorIndex = 0,
                    minusColorIndex = 0;

                // Add all elements to the array
                for (let i = 0; i < text.childNodes.length; i++) {
                    arrNode.push(text.childNodes[i])
                }

                // Change the value of the colors to the right of the element
                for (let i = arrNode.indexOf(this); i < text.childNodes.length; ++i) {
                    // Change the color of the element
                    arrNode[i].setAttribute('data-color', colors[plusColorIndex])
                    // Counter for the number of colors
                    plusColorIndex >= colors.length - 1 ? plusColorIndex = 0 : plusColorIndex++
                }

                // Change the value of the colors to the left of the element
                for (let i = arrNode.indexOf(this); i >= 0; --i) {
                    // Change the color of the element
                    arrNode[i].setAttribute('data-color', colors[minusColorIndex])
                    // Counter for the number of colors
                    minusColorIndex - 1 < 0 ? minusColorIndex = colors.length - 1 : minusColorIndex--
                }

            }

            // change the color of the letter
            checkingElementAddingStyles(this.previousElementSibling)
            this.style.color = this.getAttribute('data-color')
            checkingElementAddingStyles(this.nextElementSibling)
        })
    })

   /* // Un hover
    letters.forEach(function (e) {
        e.addEventListener('mouseout', function () {
            // Remove the color of the letter
            checkingElementAddingStyles(this.previousElementSibling, false)
            this.style.color = ''
            checkingElementAddingStyles(this.nextElementSibling, false)
        })
    })

    // When leaving the parent, remove the flag
    text.addEventListener('mouseleave', function () {
        this.removeAttribute('data-flag')
    })
}

/**
 * Checking for the existence of an element
 * @param element Takes an element to check
 * @param {boolean} [boolean=true] Takes a true/false. If it is no longer equal to 1, then the attribute will be removed.
 */
function checkingElementAddingStyles(element, boolean = true) {
    if (boolean) {
        // Change the color of the letter if there is an element
        if (element) element.style.color = element.getAttribute('data-color')
    } else {
        // Remove the color of the letter if there is an element
        if (element) element.style.color = '';
    }

}};

///////////////////////////
// Init function
//////////////////////////
colorChange(['#E61D6E', '#B6ABCF', '#1C4C87', '#0DB4AB'])

