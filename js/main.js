var game;
var model;
var emitter;
var G;
var controller;

function initializeGame()
{
	//thanks to phasergames.com for code snippets
    var isMobile = navigator.userAgent.indexOf("Mobile");
    if (isMobile == -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    }
    if (isMobile == -1){ 
        var config = {
            type: Phaser.AUTO,
            width: 480,
            height: 640,
            parent: 'phaser-game',
            scene: [SceneMain,SceneGameOver]
        };
    }
    else{
        var config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            parent: 'phaser-game',
            scene: [SceneMain,SceneGameOver]
        };
        console.log(window.innerWidth + " " + window.innerHeight);
    }
    G = new Constants();
    model = new Model();
    model.isMobile=isMobile;
    game = new Phaser.Game(config);
}

window.onload=function()
{
	// Wait for fonts to load before initializing Phaser
	if (document.fonts && document.fonts.ready) {
		document.fonts.ready.then(function() {
			initializeGame();
		});
	} else {
		// Fallback for browsers without document.fonts API
		setTimeout(initializeGame, 100);
	}
}