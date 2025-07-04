function findElementByClass(rootElement, className){
// console.log(rootElement.childNodes);
// console.log("----",rootElement.children);
if(rootElement.classList.contains(className)){
    return rootElement;
}
for (let index = 0; index < rootElement.children.length; index++) {
    const exists=findElementByClass(rootElement.children[index], className);
    if (exists){
        return exists;
    }
}
return null;
}
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'script2');
console.log(targetElement); 