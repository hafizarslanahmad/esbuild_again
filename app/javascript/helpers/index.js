export function getMetaValue(name) {
  const element = findElement(document.head, `meta[name="${name}"]`);
  if (element) {
    return element.getAttribute("content");
  }
}

export function findElement(root, selector) {
  if (typeof root == "string") {
    selector = root;
    root = document;
  }
  return root.querySelector(selector);
}

export function removeElement(el) {
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

export function onFileRemove(file) {
  console.log("Removed File");
  $(`.${file.upload.uuid}`).remove();
}

export function onFileAdd(file) {
  console.log("Added File");
  const parentName = file.controller.hiddenInput.name.split(
    "[attachments_attributes]"
  )[0];
}

export function insertAfter(el, referenceNode) {
  return referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}