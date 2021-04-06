function copyValue(element: HTMLElement, onCoppied: Function) {
  if (element) {
    // @ts-ignore
    navigator.clipboard.writeText(element.value || element.innerText);
    onCoppied(true);
  }
}

/*====================*/

export default copyValue;
