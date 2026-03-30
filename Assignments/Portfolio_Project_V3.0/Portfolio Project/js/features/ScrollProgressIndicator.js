window.addEventListener('scroll', () => {
  // current scroll position
  const currentScroll = window.scrollY;

  // total scrollable height
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // calculate percentage
  const scrollPercentage = (currentScroll / totalHeight) * 100;

  // update progress bar width
  document.getElementById('scroll-progress').style.width =
    scrollPercentage + '%';
});