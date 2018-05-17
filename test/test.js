let assert = require("assert")
let Phrase = require("../index")

describe("Phrase", function() {
  describe("#palindrome", function() {
    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple")
      assert(!nonPalindrome.palindrome())
    })

    it("should return false for an empty string", () => {
      let empty = new Phrase("")
      assert(!empty.palindrome())
    })

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar")
      assert(plainPalindrome.palindrome())
    })

    it("should return true for a mixed-case palindrome", () => {
      let mixedCasePalindrome = new Phrase("RaceCar")
      assert(mixedCasePalindrome.palindrome())
    })

    it("should return true for a palindrome with punctuation", () => {
      let punctuated = new Phrase("Madam, I'm Adam.")
      assert(punctuated.palindrome())
    })
  })

  describe("#letters", () => {
    it("should return only letters", () => {
      let punctuated = new Phrase("Madam, I'm Adam.")
      assert.strictEqual(punctuated.letters(), "MadamImAdam")
    })
  })
})
