def semordnilap(words):
    # Write your code here.
    results = []
    words_set = set(words)
    for word in words:
        reverse = word[::-1]
        if (word == reverse):
            continue
        if (reverse in words_set):
            words_set.remove(word)
            words_set.remove(reverse)
            results.append([reverse, word])
    return results
