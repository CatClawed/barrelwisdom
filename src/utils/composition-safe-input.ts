export function onCompositionSafeInput(input: HTMLInputElement, handler: () => void) {
  let isComposing = false;
  input.addEventListener('compositionstart', () => { isComposing = true; });
  input.addEventListener('compositionend', () => {
    isComposing = false;
    handler();
  });
  input.addEventListener('input', () => {
    if (!isComposing) handler();
  });
}
