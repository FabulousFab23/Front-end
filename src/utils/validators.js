export function isEmailValid(email) {
  const emailReg = /^\S+@\S+$/;
  return emailReg.test(email);
}

export function isPseudoValid(pseudo) {
  const pseudoReg = /^\s*\S+\s*$/;
  return pseudoReg.test(pseudo);
}

export function isValidHttpUrl(str) {
  const urlReg = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  return urlReg.test(str);
}
