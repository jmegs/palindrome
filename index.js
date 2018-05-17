module.exports = Phrase

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this)
    .reverse()
    .join("")
}

// defines a Phrase object.
function Phrase(content) {
  this.content = content

  this.processor = string => {
    return string.toLowerCase()
  }

  this.processedContent = () => {
    return this.letters().toLowerCase()
  }

  // strips punctuation and stuff
  this.letters = () => {
    const letterRegex = /[a-z]/i
    return Array.from(this.content)
      .filter(char => char.match(letterRegex))
      .join("")
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse()
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content
  this.translation = translation

  this.processedContent = () => {
    return this.processor(this.translation)
  }
}

TranslatedPhrase.prototype = new Phrase()
