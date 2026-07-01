fetch("https://github.com/Nikichh1/shopify-lic/edit/main/license.json")
  .then(res => res.json())
  .then(data => {
    if (!data.valid || data.key !== "robotnik-2025") {
      document.body.innerHTML = "";
      console.warn("Invalid license.");
    }
  })
  .catch(() => {
    document.body.innerHTML = "";
    console.error("License check failed.");
  });
