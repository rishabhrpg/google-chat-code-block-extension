console.info("G-Chat CodeBlocks")

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 86 && event.ctrlKey && event.shiftKey) {
        setTimeout(function () {
            sourceCode = event.target.innerText;
            sourceCode = "```" + sourceCode + "```";
            event.target.innerHTML = sourceCode;
        }, 100);
    }
}, false);
