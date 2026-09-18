// code block copy to clipboard
async function copy_to_clipboard(button) {
    const codeBlock = button.parentElement.parentElement;

    // lang will not be unset because we default it to textoriginalCopyText
    // clone it so it doesn't change the actual DOM element
    const codeElem = codeBlock.querySelector("code[data-lang]").cloneNode(true);
    // bashsession: remove command output lines
    codeElem.querySelectorAll(".go").forEach(e => e.parentNode.removeChild(e));
    // bashsession: remove prompt symbol
    codeElem.querySelectorAll(".gp").forEach(e => e.parentNode.removeChild(e));
    const rawCode = codeElem.innerText;

    await navigator.clipboard.writeText(rawCode);

    // TODO: maybe we could add a fancier indicator, like a flash or something
    button.innerHTML = "Copied!";
    setTimeout(() => {
        button.innerHTML = "{{ i18n "copy_to_clipboard" }}";
    }, 3000);
}
