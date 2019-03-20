export class Results {
  addTag(tag) {
    return function(text) {
      return `<${tag}>${text}</${tag}>`
    }
  }

  createHtml(tag, text) {
    const addTag = this.addTag(tag);
    return addTag(text);
  }

  toLorem(result) {
    return result.join(' ');
  }
}
