function toggleStyleSheet() {
    localStorage.removeItem('style');
    location.reload(); // Reload the page

    
    const element = document.getElementById('catStyleSheet');

    const style1 = 'style1.css';
    const style2 = 'style2.css';

    // Determine the new stylesheet
    const newFileName = (element.getAttribute('href') === style1) ? style2 : style1;

    // Apply the new stylesheet
    element.setAttribute('href', newFileName);

    // Save the new stylesheet in localStorage
    localStorage.setItem('style', newFileName);
    console.log(localStorage.getItem('style'));

}

window.onload = function () {
    const savedStyle = localStorage.getItem('style');
    const element = document.getElementById('catStyleSheet');

    if (savedStyle) {
        element.setAttribute('href', savedStyle);
    }
}
