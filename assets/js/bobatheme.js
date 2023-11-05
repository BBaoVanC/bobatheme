// code block copy to clipboard
window.onload = () => {
    document.querySelectorAll(".code-block").forEach(codeBlock => {
        const button = codeBlock.querySelector(".code-header > .code-copy-button");

        // lang will not be unset because we default it to text
        // clone it so it doesn't change the actual DOM element
        const codeElem = codeBlock.querySelector("code[data-lang]").cloneNode(true);
        // bashsession: remove command output lines
        codeElem.querySelectorAll(".go").forEach(e => e.parentNode.removeChild(e));
        // bashsession: remove prompt symbol
        codeElem.querySelectorAll(".gp").forEach(e => e.parentNode.removeChild(e));
        const rawCode = codeElem.innerText;

        const originalCopyText = button.innerHTML;
        button.onclick = event => {
            navigator.clipboard.writeText(rawCode);
            // TODO: maybe we could add a fancier indicator, like a flash or something
            event.target.innerHTML = "Copied!";
            setTimeout(() => {
                event.target.innerHTML = originalCopyText;
            }, 3000);
        }
    });
}
