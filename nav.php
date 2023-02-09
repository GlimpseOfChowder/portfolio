<!doctype html>
<html>
	<nav id="navDiv">
		<a href="#" class="navpamore active"><i class="bi bi-house-door"></i></a>
		<a href="#about"  class="navpamore"><i class="bi bi-person-circle"></i></i></a>
		<a href="#experience" class="navpamore"><i class="bi bi-journal-code"></i></a>
		<a href="#portfolio" class="navpamore"><i class="bi bi-activity"></i></a>
		<a href="#contact" class="navpamore"><i class="bi bi-chat-dots"></i></a>
	</nav>
<script>
// Get the container element
var navContainer = document.getElementById("navDiv");

// Get all buttons with class="navpamore" inside the container
var navs = navContainer.getElementsByClassName("navpamore");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

</script>
</html>