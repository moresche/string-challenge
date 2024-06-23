function StringChallenge(str) {
  const encodedPairs = [...str].reduce((acc, char, index) => {
    if (index === 0 || char !== str[index - 1]) {
      acc.push([1, char]);
    } else {
      acc[acc.length - 1][0]++;
    }
    return acc;
  }, []);

  const encodedString = encodedPairs.map((pair) => pair.join("")).join("");

  const ChallengeToken = "p2o6ltnu5789";

  const finalOutput = encodedString + ChallengeToken;

  const resultStr = finalOutput
    .split("")
    .map((char, index) => (index % 3 === 2 ? "X" : char))
    .join("");

  return resultStr;
}

module.exports = StringChallenge;
