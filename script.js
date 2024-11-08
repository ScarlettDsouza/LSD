function showSection(sectionId) {
    // Hide all sections
    document.getElementById('prediction').style.display = 'none';
    document.getElementById('about').style.display = 'none';

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
