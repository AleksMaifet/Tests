(() => {
	const input = document.getElementById('name_input');
	const nativeValue = input.getAttribute("value");
	input.addEventListener('input', (e) => {
		const newValue = e.currentTarget.value;
		if (newValue === nativeValue) {
			input.classList.remove('red');
			return
		}
		input.classList.add('red');
	})
})()