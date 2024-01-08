export default function Footer() {
	const date = new Date();
	const currentYear = date.getFullYear();

	return (
		<footer>
			<p className="text-center">
				&copy; 2021-{currentYear}{" "}
				<a
					href="https://www.vadimgierko.com"
					target="_blank"
					rel="noreferrer"
					style={{ textDecoration: "none" }}
				>
					Vadim Gierko
				</a>{" "}
				|{" "}
				<a
					href="https://github.com/vadimgierko"
					target="_blank"
					rel="noreferrer"
					style={{ textDecoration: "none" }}
				>
					<i className="bi bi-github"></i>
				</a>
			</p>
		</footer>
	);
}
