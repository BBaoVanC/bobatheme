// back to top
const backToTop = document.getElementById("back-to-top");
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

// code block copy to clipboard
window.onload = () => {
    document.querySelectorAll(".code-block").forEach(codeBlock => {
        const button = codeBlock.querySelector(".code-header > .code-copy-button");
        // TODO: maybe get this from HTMLElement.innerText on the actual code block content element
        // but it's hard to select it; `data-lang` attribute might not always be there (if lang is unset)
        const rawCode = codeBlock.querySelector("pre.code-raw").innerText;

        const originalCopyText = button.innerHTML;
        button.onclick = event => {
            navigator.clipboard.writeText(rawCode);
            console.log(rawCode);
            // TODO: maybe we could add a fancier indicator, like a flash or something
            event.target.innerHTML = "Copied!";
            setTimeout(() => {
                event.target.innerHTML = originalCopyText;
            }, 3000);
        }
    });
}
