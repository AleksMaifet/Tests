(() => {
	const params = new URLSearchParams(
		new URL('http://любой_домен/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd').search
	)

	for (const [key, value] of params) {
		const e = document.querySelector("form").elements[key];
		if (!e) continue;

		switch (e.constructor) {
			case RadioNodeList:
				for (const node of e) {
					if (node.value === value) node.checked = true;
				}
				break;

			case HTMLSelectElement:
				for (const option of e) {
					if (option.value === value) option.selected = true;
				}
				break;
		}
	}
})()
const setNewUrl = () => {
	addEventListener("input", ({
															 target
														 }) => {
		if (!target.matches("form [name]")) return;
		const url = `${new URLSearchParams(new FormData(target.form))}`;
		console.log(url);
	});
}
setNewUrl()

