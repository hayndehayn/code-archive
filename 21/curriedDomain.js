function curriedDomain(protocol) {
  return (domainName) => {
    return (tld) => {
      return `${protocol}://${domainName}.${tld}`;
    };
  };
}

const fullDomain = curriedDomain('https')('example')('com');
console.log('Full Domain:', fullDomain);
