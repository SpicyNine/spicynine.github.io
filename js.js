function tglSeasonBtn(season){
    // set a "selected" and a default "unselected" class
    document.getElementById(season + '-title').style.fontWeight = 'bold';
    document.querySelector('.' + season + '-div').style.border = '1px solid black';

    console.log(document.querySelector('.' + season + '-div'));
    console.log('test332');
}
