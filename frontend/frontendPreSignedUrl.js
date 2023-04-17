document.getElementById('presignedUrlBtn').addEventListener('click', () => {
	const presignedUrl_fileInput = document.getElementById('presignedUrl');
	const file = presignedUrl_fileInput.files[0];
	const fileName = file.name;
    console.log(fileName);

	 const url = `https://ybd366gna5.execute-api.us-east-1.amazonaws.com/dev/getSignedUrl`;
	

	axios
		.post(url, { fileName: fileName })
		.then((r) => {
			console.log(r);
			const url = r.data.preSignedUrl;
			axios.put(url, file).then((r) => console.log(r)).catch((err) => console.error(err));
		})
		.catch((err) => {
			console.error(err);
		});
});