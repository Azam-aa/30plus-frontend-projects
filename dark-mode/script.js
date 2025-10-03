<script>
  const icon = document.getElementById("icon");
  icon.onclick = function () {
    document.body.classList.toggle("dark-mode");

    // optional: toggle sun/moon icon
    if (document.body.classList.contains("dark-mode")) {
      icon.src = "./images/sun.png"; // replace with your sun icon
    } else {
      icon.src = "./images/moon.png"; // replace with your moon icon
    }
  }
</script>
