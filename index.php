<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Portfolio</title>
	<link rel="stylesheet" href="styles.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
</head>

<body> 
	<div class="toggler">
		<input type="checkbox" class="checkbox" id="chk" />
		<label class="label" for="chk">
			<i class="bi bi-moon-fill"></i>
			<i class="bi bi-sun-fill"></i>
			<div class="ball"></div>
	</label>
	</div>
	<?php include 'header.php' ?>
	<?php include 'nav.php' ?>
	<?php include 'about.php' ?>
	<?php include 'experience.php' ?>
	<?php include 'portfolio.php' ?> 
	<?php include 'contact.php' ?>
	<?php include 'footer.php' ?>
</body>

	<script>
	const chk = document.getElementById('chk');

	chk.addEventListener('change', () => {
		document.body.classList.toggle('dark');
	});
	</script>
</html>