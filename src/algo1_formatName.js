function formatName(firstname, lastname) {
    const fn = firstname?.trim();
    const ln = lastname?.trim();

    if (!fn && !ln) return '';
    if (!fn) return ln.toUpperCase();
    if (!ln) return fn;

    return `${ln.toUpperCase()} ${fn}`;
}

module.exports = formatName;