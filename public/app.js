
document.getElementById("instagram").onclick = function (){
    window.location.href = "https://www.instagram.com/pak1c3n/";
}

document.getElementById("phoneNumber").onclick = function(){
    var textToCopy = "0162366259";
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert("Copied the text: " + textToCopy);
    }).catch(function(error) {
        console.error("Failed to copy text: ", error);
    });
}

document.getElementById("downloadResume").onclick = function() {
    var link = document.createElement('a');
    link.href = 'MyResume.pdf'; // Replace with the path to your PDF file
    link.download = 'MyResume.pdf'; // Replace with the desired file name
    link.click();
};

document.getElementById("github").onclick = function (){
    window.location.href = "https://github.com/LilTien";
}