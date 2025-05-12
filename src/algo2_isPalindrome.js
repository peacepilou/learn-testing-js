function isPalindrome(str) {
    if (!str) return false;

    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

module.exports = isPalindrome;