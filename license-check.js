(function () {
  if (!window.APP_LICENSE) {
    document.documentElement.innerHTML = "";
    return;
  }

  const expectedKey = "robotnik-2026";

  if (
    window.APP_LICENSE.status !== "active" ||
    window.APP_LICENSE.licenseKey !== expectedKey
  ) {
    document.documentElement.innerHTML = "";
  }
})();
