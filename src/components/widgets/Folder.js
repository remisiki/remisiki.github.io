function Folder({name, id}) {
	return (
		<span
			onClick={() => {
				const item = document.getElementById(id);
				if (item.style.display) {
					item.style.display = '';
				}
				else {
					item.style.display = 'block';
				}
			}}
			className="no-href-a"
		>
			{name}
		</span>
	);
}

export default Folder;