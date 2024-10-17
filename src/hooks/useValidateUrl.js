const isValidURL = url => {
  // Regular expression to match URLs
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  const isUrlIncludesOurApp = !url.includes('10000coders.in');
  return urlPattern.test(url) && isUrlIncludesOurApp;
};

export default isValidURL;
