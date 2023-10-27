var snTgl = {"spring": {"filter":"false"}, "summer": {"filter":"true"}, "autumn": {"filter":"true"}, "winter": {"filter":"true"}}

function tglSeasonBtn(season) {
    function filterSeasons(){
        for (const property in snTgl) {
            console.log(property);
            console.log(snTgl[property]);
            if(snTgl[property]['filter'] === 'true') {
                document.getElementById('activities-' + property).style.display = 'block';
            } else {
                document.getElementById('activities-' + property).style.display = 'none';

            }
        }
    }
    filterSeasons();
}

































function tglSeasonBtn2(season){

    let snBtnDiv = document.querySelector('.' + season + '-div');
    let snTitle = document.getElementById(season + '-title');
    if(snBtnDiv.getAttribute('filter') === null) {
        snTitle.style.fontWeight = 'bold';
        snBtnDiv.setAttribute('filter', 'true');
        let snHide = document.querySelectorAll("#fbContainer div.seasonIconNB[class*='-div']:not([filter=true])");
        for(let i = 0; i < 3; i++) {
            snHide[i].setAttribute('filter', 'false');
        }
        for(let i = 0; i < 3; i++) {
            let acDiv = document.querySelector("#activities-" + snHide[i].getAttribute("season"));
            acDiv.style.display = "none";
        }
    } else if (snBtnDiv.getAttribute('filter') === 'true') {
        snTitle.style.fontWeight = 'normal';
        snBtnDiv.setAttribute('filter', 'false');
    } else if (snBtnDiv.getAttribute('filter') === 'false') {
        snTitle.style.fontWeight = 'bold';
        snBtnDiv.setAttribute('filter', 'true');
        console.log("this condition")
        let snHide = document.querySelectorAll("#fbContainer div.seasonIconNB[class*='-div']:not([filter=true])");
        for(let i = 0; i < snHide.length; i++) {
            let acDiv = document.querySelector("#activities-" + snHide[i].getAttribute("season"));
            acDiv.style.display = "none";
        }
    }

    // function setVisibility() {
    //     let allSn = document.querySelectorAll("#fbContainer div.seasonIconNB[class*='-div']");
    //     // let snHide = document.querySelectorAll("#fbContainer div.seasonIconNB[class*='-div'][filter=true]");
    //     // if(snHide.length === 4) {
    //     //
    //     // }
    //     for(let i = 0; i < 4; i++) {
    //         let acDiv = document.querySelector("#activities-" + allSn[i].getAttribute("season"));
    //         if(allSn[i].getAttribute('filter') === 'true') {
    //             acDiv.style.display = 'block';
    //         } else {
    //             acDiv.style.display = 'none';
    //         }
    //     }
    // }

    //
    // let snTrue = document.querySelectorAll("#fbContainer div.seasonIconNB[class*='-div'][filter=true]");
    // console.log(snTrue);
    // // let allSn = document.querySelectorAll("#fbContainer div.seasonIconNB[class*='-div']");
    // for(let i = 0; i < 4; i++) {
    //     if(allSn.getAttr)
    // }

    //     // let snHide = document.querySelectorAll("#fbContainer div.seasonIconNB[class*='-div'][filter=true]");
    // let snHideLen = snHide.length;
    // console.log(snHide)
    // console.log(snHideLen);
    // if(snHideLen === 4) {
    //     for(let i = 0; i < snHideLen; i++) {
    //         let acDiv = document.querySelector("#activities-" + snHide[i].getAttribute("season"));
    //         acDiv.style.display = "block";
    //     }
    // } else {
    //     console.log("FRESH COMP================================")
    //     for(let i = 0; i < snHideLen; i++) {
    //         console.log("NEW COMP ================")
    //         console.log(snHide[i].getAttribute("season"))
    //         let sn = snHide[i].getAttribute("season");
    //         let acDiv = document.querySelector("#activities-" + sn);
    //         console.log("evaling");
    //         console.log(acDiv);
    //         if(acDiv.style.display === "") {
    //             console.log("doing this 1")
    //             acDiv.style.display = "none";
    //         } else if (acDiv.style.display === "none" && document.querySelector('.' + sn + '-div').getAttribute('filter') === 'true') {
    //             console.log("doing this 2")
    //             acDiv.style.display = "block";
    //         } else if (acDiv.style.display === "block") {
    //             console.log("doing this 3")
    //             acDiv.style.display = "none";
    //         }
    //     }
    // }
}