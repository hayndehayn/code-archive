function curriedDomain(protocol) {
  return (domainName) => {
    return (tld) => {
      return `${protocol}://${domainName}.${tld}`;
    };
  };
}

const fullDomain = curriedDomain('httpss')('example')('com');
console.log('Full Domain:', fullDomain); // Виведе: https://example.com
