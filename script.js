((w) => {
    "music module";

    w.loadTracks = loadTracks;
    w.playTrack = playTrack;
    w.stopAllTracks = stopAllTracks;

    const player = document.querySelector('.player-overlay');
    const playerBg = document.querySelector('.player-overlay-background');

    const tracks = {};
    let currentTrack;
    function loadTrack(trackName) {
        const sounds = [];

        ['a', 'b'].map((side) => {
            sounds.push(...(
                new Array(10).fill(0).map((_, i) => {
                    const audio = document.createElement("audio");
                    audio.src = `https://mynoise.world/Data/${trackName}/${i}${side}.ogg`;
                    audio.preload = "none";
                    audio.volume = 0.8;
                    audio.loop = true;

                    const bg = document.createElement("img");
                    bg.src = `https://mynoise.net/Data/${trackName}/bg.jpg`;

                    return audio;
                })
            ))
        });


        tracks[trackName] = sounds;
    }


    function playTrack(trackName) {
        if (currentTrack)
            stopTrack(currentTrack);

        currentTrack = trackName;
        tracks[trackName].forEach(audio => {
            audio.currentTime = 0;
            audio.play()
        });

        player.style.display = 'block';
        playerBg.style.background = `url('https://mynoise.net/Data/${trackName}/bg.jpg')`;
    }

    function loadTracks() {
        loadTrack('IRISHCOAST');
        loadTrack('THUNDER');
        loadTrack('JAPANGARDEN');
        loadTrack('PEBBLEBEACH');
        loadTrack('WATERFALL2');
    }

    function stopTrack(trackName) {
        tracks[trackName].forEach(a => a.pause());
    }

    function stopAllTracks() {
        Object.keys(tracks).forEach(stopTrack);
        player.style.display = 'none';
    }

})(window);

((w) => {
    "utils module";

    w.scrollToTop = scrollToTop

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
})(window);

((w) => {
    "gallery module";

    document.querySelectorAll('.gallery img').forEach(img =>
        img.addEventListener('click', () => {
            img.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        })
    );
})(window);
