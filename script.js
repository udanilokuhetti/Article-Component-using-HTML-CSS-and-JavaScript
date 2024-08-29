document.getElementById('share-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var shareList = document.getElementById('share-list');
    if (shareList.style.display === 'none' || shareList.style.display === '') {
        shareList.style.display = 'block';
    } else {
        shareList.style.display = 'none';
    }
});
