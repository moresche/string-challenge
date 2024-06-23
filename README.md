# String Challenge

## Description
The function `StringChallenge(str)` takes a string `str` and returns a compressed version using the Run-length encoding algorithm. This algorithm counts the occurrence of each repeating character and outputs that count along with a single character of the repeating sequence. For example, for input "wwwggopp", the output would be "3w2g1o2p". The string will only contain lowercase letters with no numbers, punctuation, or symbols.

Once the function is working correctly, the final output string is concatenated with the ChallengeToken, and every third character is replaced with an 'X'.

## ChallengeToken
```
p2o6ltnu5789
```

## Examples

### Example 1
**Input**
```
StringChallenge("aabbcde")
```
**Output**
```
2a2b1c1d1e
```
**Final Output**
```
2aXb1X1dXepXo6XtnX57X9
```

### Example 2
**Input**
```
StringChallenge("wwwbbbw")
```
**Output**
```
3w3b1w
```
**Final Output**
```
3wXb1Xp2X6lXnuX78X
```

This README provides a clear description of how the `StringChallenge` function operates, including its input/output behavior and the format of the final output when concatenated with the ChallengeToken. Adjustments can be made based on any additional requirements or specifications.
