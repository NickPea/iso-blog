//

export default (
	appString?: string,
	stylesString?: string,
	initialState?,
	clientBundlePath?: string,
	head = "<title>App</title>",
	lang = "en"
) => {
	return `
		<!DOCTYPE html>
		<html lang=${lang}>
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<style data-client-removable-ssr-jss type="text/css">${stylesString}</style>
			${head}
		</head>
		<body>
			<div id="root">
				${appString}
			</div>
			
			<script>
				window.__INITIAL_SERVER_STATE__ = JSON.parse('${JSON.stringify(initialState)||null}');
			</script>

			<script src="${clientBundlePath||null}"></script>
			
		</body>
		</html>
    `;
};
