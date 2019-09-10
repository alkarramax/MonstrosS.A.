window.onload = function () {
    var minimize_btn = document.getElementById("minimize"),
    maximize_btn = document.getElementById("maximize"),
    leftnav      = document.getElementById("leftnav"),
    topnav       = document.getElementById("topnav"),
    main         = document.getElementById("main");
    
    minimize_btn.addEventListener('click', minimize, false);
    maximize_btn.addEventListener('click', maximize, false);


    function minimize() {

        maximize_btn.style.transform = 'scale(1)';
        leftnav.style.left           = '-200px';
        topnav.style.left            = '0px';
        topnav.style.width           = '100%';
        main.style.left              = '0px';
        main.style.width             = '100%';
        

    }

    function maximize() {

        maximize_btn.style.transform = 'scale(0)';
        leftnav.style.left      = '0px';
        topnav.style.left       = '200px';
        topnav.style.width      = 'calc(100% - 200px)';
        main.style.left         = '200px';
        main.style.width        = 'calc(100% - 200px)';

    }
}