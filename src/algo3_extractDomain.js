function extractDomain(email) {
  if (!email.includes('@')) {
    throw new Error('Invalid email');
  }

  return email.split('@')[1];
}

module.exports = extractDomain;