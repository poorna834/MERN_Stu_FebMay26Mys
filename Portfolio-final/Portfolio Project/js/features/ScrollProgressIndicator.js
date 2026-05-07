

export function initScrollProgressIndicator() {
  const progressBar = document.getElementById("progress-bar");

  if (!progressBar) return;

  function updateProgressBar() {
    const scrollTop =
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress =
      scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progressBar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateProgressBar);
  window.addEventListener("resize", updateProgressBar);
  window.addEventListener("load", updateProgressBar);
}