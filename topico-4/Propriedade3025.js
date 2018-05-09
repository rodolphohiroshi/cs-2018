function propriedade3025(n) {

  if (n < 0 || n > 9999) {
    return false;
  }

  let i = Math.floor(n / 100);
  let j = n % 100;
  
  let soma = i + j;
  
  return (soma * soma) == n;
}

exports.propriedade3025 = propriedade3025;
