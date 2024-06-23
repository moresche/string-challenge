const StringChallenge = require("../StringChallenge");

describe("StringChallenge function", () => {
  it('should compress "aabbcde" correctly', () => {
    expect(StringChallenge("aabbcde")).toBe("2aXb1X1dXepXo6XtnX57X9");
  });

  it('should compress "wwwbbbw" correctly', () => {
    expect(StringChallenge("wwwbbbw")).toBe("3wXb1Xp2X6lXnuX78X");
  });
});
