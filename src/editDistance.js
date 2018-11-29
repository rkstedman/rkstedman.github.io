module.exports = function editDistance(s, t) {
  let D = [[]]
  for(let i = 0; i <= s.length; i++) {
    D[0].push(i);
  }
  for(let j = 1; j <= t.length; j++) {
    D.push(new Array(s.length));
    D[j][0] = j;
  }

  for(let j = 1; j <= t.length; j++) {
    for(let i = 1; i <= s.length; i++) {
      let insertion = D[j - 1][i] + 1;
      let deletion = D[j][i - 1] + 1;
      let match = D[j - 1][i - 1];
      let mismatch = D[j - 1][i - 1] + 1;
      if (s[i - 1] === t[j - 1]) {
        D[j][i] = Math.min(insertion, deletion, match);
      } else {
        D[j][i] = Math.min(insertion, deletion, mismatch);
      }
    }
  }
  return D
}
