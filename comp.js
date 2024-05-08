document.getElementById('compressBtn').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    if(fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            var contents = e.target.result;
            var compressedContents = contents.substring(0, 100) + '...';
            document.getElementById('fileContents').textContent = compressedContents;
            var blob = new Blob([compressedContents], {type: 'text/plain'});
            var downloadLink = document.getElementById('downloadLink');
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = 'compressed_' + file.name;
            downloadLink.style.display = 'block';
        };
        reader.readAsText(file);
    } else {
        alert('Please select a file to compress.');
    }
})