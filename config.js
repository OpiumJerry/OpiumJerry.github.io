(async function checkSites() {
    const sites = [
        "https://ph4xus.github.io"
    ];

    let siteAvailable = false;

    for (let site of sites) {
        try {
            const response = await fetch(site, { method: 'HEAD' });
            if (response.ok) {
                if (!siteAvailable) {
                    localStorage.setItem("site", site);
                    siteAvailable = true;
                }
                console.log(`Site available: ${site}`);
                break; 
            } else {
                console.log(`Site not reachable (status: ${response.status}): ${site}`);
            }
        } catch (error) {
            console.log(`Error accessing site: ${site} | Error: ${error.message}`);
        }
    }

    if (!siteAvailable) {
        console.log("No sites are available.");
    }
})();



    <script>
let list = ['Stickman hook', '1v1.lol', 'Buildnow.gg', 'Cookie Clicker', 'Retro Football', 'Agar.io', 'Smash karts', 'Slope', 'yohoho', 'Motor X3m', 'Monkey Mart', 'Awesome Tanks 2', 'Time Shooter 3', 'Sling Drift', 'Drift Boss', 'Bank Robbery', 'ovo', 'tiny fishing', 'vex 6', 'Basketball Stars', 'sm64', '60 second burger run', 'Paper.io 2', 'Cat mario', 'Idle breakout', 'Ducklife', 'Ducklife2', 'Ducklife3', 'Pixel Gun 2', 'Drive mad', 'Cluster Rush', '10 minutes till dawn', 'Google Snake', 'Gun mayhem 2', 'Generic fishing', 'FNAF', 'Ninja vs evilcorp', 'CSGO clicker', 'madalin stunt cars', 'bitlife', 'snowrider', 'Jetpack joyride', 'Impossible quiz', 'Pappas pizzaria', 'Pappas Freezeria', 'Pappas Pancakearia', 'World hardest gm 2', 'Rooftop sniper', 'stack', 'Tanuki sunset', 'Soccer random', 'Subway surfers', 'Learn to fly', 'Learn2fly', 'Hilldraw', 'Snoball io', 'Fireboy and water girl', 'Pixel Speedrun', 'A dance of fire and ice', 'giraffes volleyball', 'Deepest sword', 'Bottle flip 3d', 'Choppy orc', 'Precision client 1.5', 'Funny shooter', 'Hole io', 'Tomb of the mask', 'Doge miner', 'Run 3', 'Sausage flip', 'Sandstrike.io', 'Color tunnel', 'Polytrack', 'Friday night funkin']

let imgsrc = ['/assets/img/stickman.jpeg', '/assets/img/1v1.webp', '/assets/img/builf.png', '/assets/img/cookieclicker.webp', '/assets/img/retrobowl.jpeg', '/assets/img/agar.png', '/Vafor_IT/d2f6b8c9e4a1f7d5a3c9e1b8f6d4a2e3/9c9e529b14731be871b07b89660bbc2a.png', '/assets/img/slope2.png', '/assets/img/pirates2.jfif', '/assets/img/moto.jfif', '/assets/img/monkey.jfif', '/assets/img/tanks2.jfif', '/assets/img/superhot.jfif', '/Vafor_IT/badtaxidriver/thumbnail.jpg', '/assets/img/drift.jpeg', '/assets/img/bank4.png', '/assets/img/ovo.png', '/assets/img/tinyfishing.png', '/assets/img/vex6.png', '/assets/img/basketball.jpeg', '/assets/img/sm64.jpg', '/assets/img/burger.png', '/assets/img/paper.jpg', '/assets/img/cat.png', '/assets/img/idle.png', '/assets/img/duck.jpeg', '/assets/img/ducklife2.webp', '/assets/img/ducklife3.webp', '/assets/img/pixelgun.jfif', '/assets/img/drivemad.jpeg', '/assets/img/bustergush.png', '/assets/img/20min.jfif', '/assets/img/drakethesnake.png', '/assets/img/gunmayhem.jpeg', '/assets/img/fishing.png', '/assets/img/fnaf.webp', '/assets/img/ninja.png', '/assets/img/csgo.png', '/assets/img/mcm.png', '/assets/img/bitlife.jpeg', '/assets/img/snow.png', '/assets/img/jet.png', '/assets/img/averageschool.png', '/Vafor_IT/papaspizzaria/papaspizzaria.jpg', '/assets/img/papas-freezeria.webp', '/assets/img/papaspancakes.png', '/Vafor_IT/worlds-hardest-game-2/the-worlds-hardest-game-2.jpg', '/assets/img/rooft.png', '/Vafor_IT/stack/stack.png', '/Vafor_IT/tanuki-sunset/img/logo.png', '/Vafor_IT/soccer-random/splash.png', '/Vafor_IT/subway-surfers/img/splash.jpg', '/assets/img/learntofly.jpeg', '/assets/img/learn.jpeg', '/Vafor_IT/hilldraw/icons/icon-512.png', '/assets/img/snowgamingisdead.jpg', '/assets/img/fireandwater.jpg', '/assets/img/pixelspeedrun.png', '/Vafor_IT/dances/splash.png', '/Vafor_IT/7a9b3c4e2f6d1e8c5a2f4b7d9e3c0a6f/favico.png', '/assets/img/deepest-sword.png', '/assets/img/sddefault.jpg', '/assets/img/thumb_2.jpg', '/assets/img/imgoingtoslapmartin.png', '/assets/img/funnyshooter.webp', '/assets/img/hole.io.jfif', '/assets/img/tomb-of-the-mask-logo.jpeg', '/Vafor_IT/doge/img/dogeminer_300x300.png', '/Vafor_IT/run3editor/loading.png', '/assets/img/sausage.jpg', '/assets/img/sanstrike.webp', '/Vafor_IT/colourtunnel/TemplateData/logo.png', '/assets/img/poly.jpeg', '/Vafor_IT/fnfweek7/friday-night-funkin.png']

let listlink = ['/Vafor_IT/hookingman/', '/Vafor_IT/1a3b7c9e1f2g4h5j6k8l0m1n2p3q4r5s', '/Vafor_IT/a3f5d9e7c2b8a4e1f3d5c7e9b0a4f6c8/', '/Vafor_IT/cookie-clicker/', '/Vafor_IT/retrobowl/', '/Vafor_IT/jptr-agario/web/', '/Vafor_IT/d2f6b8c9e4a1f7d5a3c9e1b8f6d4a2e3', '/Vafor_IT/slope', '/Vafor_IT/pirates', '/Vafor_IT/mx3m', '/Vafor_IT/ihatemonkeys', '/Vafor_IT/awesometanks2/', '/Vafor_IT/time-shooter-3', '/Vafor_IT/badtaxidriver', '/Vafor_IT/germany%20drift/DriftBoss-gh-pages/', '/Vafor_IT/bank', '/Vafor_IT/ovo', '/Vafor_IT/tiny-fishing', '/Vafor_IT/vex6', '/Vafor_IT/basketball-stars', '/Vafor_IT/sm64', '/Vafor_IT/60min/index.html', '/Vafor_IT/paper-io-2/index.html', '/Vafor_IT/cat-mario/index.html', '/Vafor_IT/idle-breakout/idle-breakout/index.html', '/Vafor_IT/ducklife1/index.html', '/Vafor_IT/ducklife2', '/Vafor_IT/ducklife3', '/Vafor_IT/pixelgun/maxwellstevenson.com.html', '/Vafor_IT/drive-mad/', '/Vafor_IT/bustergush', '/Vafor_IT/10-minutes-till-dawn/', '/Vafor_IT/google-snake/', '/Vafor_IT/gunmayhem2/', '/Vafor_IT/fishing_game/', '/Vafor_IT/scarybear/', '/Vafor_IT/ninja.html', '/Vafor_IT/csgo_clicker/', '/Vafor_IT/mcm-files/mcm-files/index.html', '/Vafor_IT/bitlife/', '/Vafor_IT/Snow-Rider3D/index.html', '/Vafor_IT/jetpack-joyride/', '/Vafor_IT/impossiblequiz/', '/Vafor_IT/papaspizzaria/', '/Vafor_IT/papasfreezeria/', '/Vafor_IT/papaspancakeareia/', '/Vafor_IT/worlds-hardest-game-2/index.html', '/Vafor_IT/rooftop-snipers/', '/Vafor_IT/stack/', '/Vafor_IT/tanuki-sunset/', '/Vafor_IT/soccer-random/', '/Vafor_IT/subway-surfers/', '/Vafor_IT/learntofly/', '/Vafor_IT/learn2fly/index.html', '/Vafor_IT/hilldraw/', '/Vafor_IT/snowballio/', '/Vafor_IT/fireboywatergirlforesttemple/', '/Vafor_IT/pixellyballs/', '/Vafor_IT/dances/', '/Vafor_IT/7a9b3c4e2f6d1e8c5a2f4b7d9e3c0a6f', '/Vafor_IT/deepswordayo/', '/Vafor_IT/bottleflippingdiedin20126/', '/Vafor_IT/ChoppyOrc', '/Vafor_IT/precision-client/precision-client-v34.6/public/', '/Vafor_IT/VAzg42bVjmum4loaFEocbmzmkIYQggJd/', '/Vafor_IT/hole.io/', '/Vafor_IT/totm', '/Vafor_IT/doge/', '/Vafor_IT/run3editor/', '/Vafor_IT/sausage/', '/Vafor_IT/sanstrike.io/', '/Vafor_IT/colourtunnel', '/Vafor_IT/polytrack', '/Vafor_IT/fnfweek7/']
 
