// Dados mockados
const mockTracks = [
    {
        id: '1',
        title: 'hungria amor e fe ',
        artist: 'hungria',
        album: 'A Night at the Opera',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Queen',
        audioUrl: 'hungriahiphop-amor-e-fe-a4c807bb.mp3',
        duration: 354,
        genre: 'Rock'
    },
    {
        id: '2',
        title: 'blue jeans',
        artist: 'lana del rey',
        album: 'Hotel California',
        albumCover: 'https://artrockstore.com/cdn/shop/products/large_1024x1024.gif?v=1616037534',
        audioUrl: 'Lana Del Rey - Blue Jeans(MP3_160K).mp3',
        duration: 391,
        genre: 'pop'
    },
    {
        id: '3',
        title: 'born to die',
        artist: 'lana del rey',
        album: 'born to die',
        albumCover: 'https://artrockstore.com/cdn/shop/products/large_1024x1024.gif?v=1616037534',
        audioUrl: 'Lana Del Rey - Born To Die(MP3_160K).mp3',
        duration: 183,
        genre: 'Pop'
    },
    {
        id: '4',
        title: 'blooklyn baby',
        artist: 'lana del rey',
        album: 'born to die',
        albumCover: 'https://people.com/thmb/RG27bVa7vfw4cdAgfez46fK50H8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(746x471:748x473)/lana-del-rey-performing-paris-071023-08ee582cdac64bb4b1c584e10982e7f8.jpg',
        audioUrl: 'Lana Del Rey - Brooklyn Baby (Official Audio)(MP3_160K).mp3',
        duration: 482,
        genre: 'Rock'
    },
    {
        id: '5',
        title: 'doin time',
        artist: 'lana del rey',
        album: 'born to die',
        albumCover: 'https://th.bing.com/th/id/R.59c83749ac5a4b329262f7bc12ce25b9?rik=mqaY5H6OyqumvA&riu=http%3a%2f%2fwww.theplace2.ru%2farchive%2flana_delrey%2fimg%2fzywymiguffq.jpg&ehk=mk27cbIJhaJElDSBj7kregI0vQsE5nUz5oHsAG0Odwo%3d&risl=&pid=ImgRaw&r=0',
        audioUrl: 'Lana Del Rey - Doin_ Time(MP3_160K).mp3',
        duration: 294,
        genre: 'Pop'
    },
    {
        id: '6',
        title: 'say yes to heaven',
        artist: 'lana del rey',
        album: 'Nevermind',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.QuRKEVCsYehYWg3YILQwsQHaLH?r=0&pid=ImgDet&w=184&h=276&c=7&dpr=1,3&o=7&rm=3',
        audioUrl: 'Lana Del Rey - Say Yes To Heaven (Official Audio)(MP3_160K).mp3',
        duration: 301,
        genre: 'pop'
    },
    {
        id: '7',
        title: 'summertime sadness',
        artist: 'lana del rey',
        album: 'Highway 61 Revisited',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.aCn9avU5ChidCjQxNUa2xwHaJk?r=0&pid=ImgDet&w=184&h=237&c=7&dpr=1,3&o=7&rm=3',
        audioUrl: 'Lana Del Rey - Summertime Sadness (Official Music Video)(MP3_160K).mp3',
        duration: 369,
        genre: 'Folk Rock'
    },
    {
        id: '8',
        title: 'ultraviolence',
        artist: 'lana del rey',
        album: 'Meet The Beatles!',
        albumCover: 'https://tse4.mm.bing.net/th/id/OIP.GOGDstNm0pqh3Oi7xgEdNQHaLG?r=0&pid=ImgDet&w=184&h=276&c=7&dpr=1,3&o=7&rm=3',
        audioUrl: 'Lana Del Rey - Ultraviolence(MP3_160K).mp3',
        duration: 234,
        genre: 'Pop'
    },
    {
        id: '9',
        title: 'video games',
        artist: 'lana del rey',
        album: 'Chuck Berry Is on Top',
        albumCover: 'https://tse1.mm.bing.net/th/id/OIP.c2JoXl6zixopylRR5UbFHQAAAA?r=0&pid=ImgDet&w=184&h=276&c=7&dpr=1,3&o=7&rm=3',
        audioUrl: 'Lana Del Rey - Video Games(MP3_160K).mp3',
        duration: 158,
        genre: 'Rock'
    },
    {
        id: '10',
        title: 'west coast',
        artist: 'lana del rey',
        album: 'Smiley Smile',
        albumCover: 'https://i.pinimg.com/originals/70/fa/39/70fa39677c657f9688b3512a1275a8ea.jpg',
        audioUrl: 'Lana Del Rey - West Coast(MP3_160K).mp3',
        duration: 216,
        genre: 'Pop'
    },
    {
        id: '11',
        title: 'young and beautiful',
        artist: 'lana del rey',
        album: 'lana del rey',
        albumCover: 'https://facts.net/wp-content/uploads/2023/06/Lana-Del-Rey-Album-Cover-435x435.jpg',
        audioUrl: 'Lana Del Rey - Young And Beautiful (Lyrics)(MP3_160K).mp3',
        duration: 147,
        genre: 'Soul'
    },
    {
        id: '12',
        title: 'Hey Jude',
        artist: 'The Beatles',
        album: 'Single',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Jude',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 431,
        genre: 'Pop'
    },
    {
        id: '13',
        title: 'What\'s Going On',
        artist: 'Marvin Gaye',
        album: 'What\'s Going On',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Marvin',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 234,
        genre: 'Soul'
    },
    {
        id: '14',
        title: 'My Generation',
        artist: 'The Who',
        album: 'My Generation',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Who',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 224,
        genre: 'Rock'
    },
    {
        id: '15',
        title: 'A Change Is Gonna Come',
        artist: 'Sam Cooke',
        album: 'Ain\'t That Good News',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Sam',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 191,
        genre: 'Soul'
    },
    {
        id: '16',
        title: 'Yesterday',
        artist: 'The Beatles',
        album: 'Help!',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Yesterday',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 125,
        genre: 'Pop'
    },
    {
        id: '17',
        title: 'Blowin\' in the Wind',
        artist: 'Bob Dylan',
        album: 'The Freewheelin\' Bob Dylan',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Wind',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 165,
        genre: 'Folk'
    },
    {
        id: '18',
        title: 'Light My Fire',
        artist: 'The Doors',
        album: 'The Doors',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Doors',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 428,
        genre: 'Rock'
    },
    {
        id: '19',
        title: 'The Times They Are a-Changin\'',
        artist: 'Bob Dylan',
        album: 'The Times They Are a-Changin\'',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Times',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 180,
        genre: 'Folk'
    },
    {
        id: '20',
        title: 'In My Life',
        artist: 'The Beatles',
        album: 'Rubber Soul',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Life',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 147,
        genre: 'Pop'
    },
    {
        id: '21',
        title: 'People Get Ready',
        artist: 'The Impressions',
        album: 'People Get Ready',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=People',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 165,
        genre: 'Soul'
    },
    {
        id: '22',
        title: 'God Only Knows',
        artist: 'The Beach Boys',
        album: 'Pet Sounds',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=God',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 172,
        genre: 'Pop'
    },
    {
        id: '23',
        title: 'A Day in the Life',
        artist: 'The Beatles',
        album: 'Sgt. Pepper\'s Lonely Hearts Club Band',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Day',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 335,
        genre: 'Pop'
    },
    {
        id: '24',
        title: 'Gimme Shelter',
        artist: 'The Rolling Stones',
        album: 'Let It Bleed',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Shelter',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 272,
        genre: 'Rock'
    },
    {
        id: '25',
        title: 'Dancing in the Street',
        artist: 'Martha and the Vandellas',
        album: 'Dance Party',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Dancing',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 158,
        genre: 'Soul'
    },
    {
        id: '26',
        title: 'The Weight',
        artist: 'The Band',
        album: 'Music from Big Pink',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Weight',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 274,
        genre: 'Rock'
    },
    {
        id: '27',
        title: 'Waterloo Sunset',
        artist: 'The Kinks',
        album: 'Something Else by The Kinks',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Waterloo',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 201,
        genre: 'Rock'
    },
    {
        id: '28',
        title: 'Good Times Bad Times',
        artist: 'Led Zeppelin',
        album: 'Led Zeppelin',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Times',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 166,
        genre: 'Rock'
    },
    {
        id: '29',
        title: 'Sympathy for the Devil',
        artist: 'The Rolling Stones',
        album: 'Beggars Banquet',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Sympathy',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 382,
        genre: 'Rock'
    },
    {
        id: '30',
        title: 'I Can\'t Get No Satisfaction',
        artist: 'The Rolling Stones',
        album: 'Out of Our Heads',
        albumCover: 'https://via.placeholder.com/300x300/1db954/ffffff?text=Satisfaction',
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        duration: 224,
        genre: 'Rock'
    }
];

const mockPlaylists = [];

// Estado da aplicação
let currentState = {
    currentTrack: null,
    isPlaying: false,
    volume: 0.7,
    currentTime: 0,
    duration: 0,
    repeat: 'none', // none, one, all
    shuffle: false,
    currentPlaylist: null,
    currentTrackIndex: 0,
    library: {
        playlists: [],
        likedSongs: []
    }
};

// Elementos DOM
const audioElement = document.getElementById('audioElement');
const player = document.getElementById('player');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const volumeBtn = document.getElementById('volumeBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const volumeBar = document.getElementById('volumeBar');
const volumeFill = document.getElementById('volumeFill');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const playerAlbumCover = document.getElementById('playerAlbumCover');
const likeBtn = document.getElementById('likeBtn');
const searchInput = document.getElementById('searchInput');

// --- MODAL DE ADICIONAR À PLAYLIST ---
const addToPlaylistBtn = document.getElementById('addToPlaylistBtn');
const playlistModal = document.getElementById('playlistModal');
const playlistModalList = document.getElementById('playlistModalList');
const closePlaylistModal = document.getElementById('closePlaylistModal');

// --- MODAL DE CRIAR PLAYLIST ---
const openCreatePlaylistModalBtn = document.getElementById('openCreatePlaylistModal');
const openCreatePlaylistModalBtn2 = document.getElementById('openCreatePlaylistModal2');
const createPlaylistModal = document.getElementById('createPlaylistModal');
const closeCreatePlaylistModal = document.getElementById('closeCreatePlaylistModal');
const createPlaylistBtn = document.getElementById('createPlaylistBtn');
const newPlaylistName = document.getElementById('newPlaylistName');
const newPlaylistDesc = document.getElementById('newPlaylistDesc');

// Funções utilitárias
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#1db954' : '#e74c3c'};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Funções do player
function loadTrack(track) {
    currentState.currentTrack = track;
    audioElement.src = track.audioUrl;
    audioElement.load();
    
    playerTrackTitle.textContent = track.title;
    playerTrackArtist.textContent = track.artist;
    playerAlbumCover.src = track.albumCover;
    
    updateLikeButton();
    player.style.display = 'flex';
}

function playTrack() {
    if (currentState.currentTrack) {
        audioElement.play().then(() => {
            currentState.isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(error => {
            console.error('Erro ao reproduzir:', error);
            showNotification('Erro ao reproduzir a música', 'error');
        });
    }
}

function pauseTrack() {
    audioElement.pause();
    currentState.isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function togglePlay() {
    if (currentState.isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
}

function nextTrack() {
    if (currentState.currentPlaylist && currentState.currentPlaylist.tracks.length > 0) {
        let nextIndex = currentState.currentTrackIndex + 1;
        
        if (currentState.shuffle) {
            nextIndex = Math.floor(Math.random() * currentState.currentPlaylist.tracks.length);
        } else if (nextIndex >= currentState.currentPlaylist.tracks.length) {
            if (currentState.repeat === 'all') {
                nextIndex = 0;
            } else {
                return; // Fim da playlist
            }
        }
        
        currentState.currentTrackIndex = nextIndex;
        const track = currentState.currentPlaylist.tracks[nextIndex];
        loadTrack(track);
        playTrack();
    }
}

function previousTrack() {
    if (currentState.currentPlaylist && currentState.currentPlaylist.tracks.length > 0) {
        const prevIndex = Math.max(0, currentState.currentTrackIndex - 1);
        currentState.currentTrackIndex = prevIndex;
        const track = currentState.currentPlaylist.tracks[prevIndex];
        loadTrack(track);
        playTrack();
    }
}

function toggleShuffle() {
    currentState.shuffle = !currentState.shuffle;
    shuffleBtn.classList.toggle('active', currentState.shuffle);
}

function toggleRepeat() {
    const repeatStates = ['none', 'all', 'one'];
    const currentIndex = repeatStates.indexOf(currentState.repeat);
    currentState.repeat = repeatStates[(currentIndex + 1) % repeatStates.length];
    
    repeatBtn.classList.toggle('active', currentState.repeat !== 'none');
    
    if (currentState.repeat === 'one') {
        repeatBtn.innerHTML = '<i class="fas fa-redo-alt"></i><span style="font-size: 10px; position: absolute; top: -2px; right: -2px;">1</span>';
    } else {
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
    }
}

function setVolume(volume) {
    currentState.volume = volume;
    audioElement.volume = volume;
    volumeFill.style.width = `${volume * 100}%`;
    
    if (volume === 0) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else if (volume < 0.5) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    }
}

function toggleMute() {
    if (currentState.volume > 0) {
        currentState.lastVolume = currentState.volume;
        setVolume(0);
    } else {
        setVolume(currentState.lastVolume || 0.7);
    }
}

function updateProgress() {
    if (audioElement.duration) {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        progressFill.style.width = `${progress}%`;
        currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
        totalTimeDisplay.textContent = formatTime(audioElement.duration);
    }
}

function seekTo(event) {
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * audioElement.duration;
    audioElement.currentTime = newTime;
}

function updateLikeButton() {
    const isLiked = currentState.library.likedSongs.some(song => song.id === currentState.currentTrack?.id);
    likeBtn.classList.toggle('liked', isLiked);
    likeBtn.innerHTML = isLiked ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
}

function toggleLike() {
    if (!currentState.currentTrack) return;
    
    const isLiked = currentState.library.likedSongs.some(song => song.id === currentState.currentTrack.id);
    
    if (isLiked) {
        currentState.library.likedSongs = currentState.library.likedSongs.filter(song => song.id !== currentState.currentTrack.id);
        showNotification('Removido dos favoritos');
    } else {
        currentState.library.likedSongs.push(currentState.currentTrack);
        showNotification('Adicionado aos favoritos');
    }
    
    updateLikeButton();
    renderLibrary();
}

// Funções de renderização
function renderPlaylistCard(playlist) {
    return `
        <div class="playlist-card" onclick="renderPlaylistDetails('${playlist.id}')">
            <img src="${playlist.coverImage}" alt="${playlist.name}" class="playlist-cover">
            <button class="play-button">
                <i class="fas fa-play"></i>
            </button>
            <h3 class="playlist-name">${playlist.name}</h3>
            <p class="playlist-description">${playlist.description}</p>
        </div>
    `;
}

function renderTrackCard(track, trackList) {
    const isLiked = currentState.library.likedSongs.some(song => song.id === track.id);
    return `
        <div class="track-card" onclick="playTrackInList('${track.id}', window._lastRenderedList)">
            <img src="${track.albumCover}" alt="${track.title}" class="track-album-cover">
            <div class="track-info">
                <h4 class="track-title">${track.title}</h4>
                <p class="track-artist">
                    ${track.artist}
                    <span class="track-duration">${formatTime(track.duration)}</span>
                </p>
            </div>
            <div class="action-buttons">
                <button class="action-btn play-btn" onclick="event.stopPropagation(); playTrackInList('${track.id}', window._lastRenderedList)">
                    <i class="fas fa-play"></i>
                </button>
                <button class="action-btn" onclick="event.stopPropagation(); toggleLikeById('${track.id}')">
                    <i class="${isLiked ? 'fas' : 'far'} fa-heart" style="color: ${isLiked ? '#1db954' : ''}"></i>
                </button>
            </div>
        </div>
    `;
}

function getSaudacao() {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) return 'Bom dia';
    if (hora >= 12 && hora < 18) return 'Boa tarde';
    return 'Boa noite';
}

function renderHome() {
    // Saudação dinâmica
    const saudacao = getSaudacao();
    document.querySelector('.welcome-section h1').textContent = saudacao;
    // Sugestões aleatórias
    const shuffled = [...mockTracks].sort(() => 0.5 - Math.random());
    const suggestedTracks = shuffled.slice(0, 8);
    const recentTracks = mockTracks.slice(0, 12);
    window._lastRenderedList = suggestedTracks;
    document.getElementById('suggestedTracks').innerHTML = suggestedTracks.map(t => renderTrackCard(t, suggestedTracks)).join('');
    window._lastRenderedList = recentTracks;
    document.getElementById('recentTracks').innerHTML = recentTracks.map(t => renderTrackCard(t, recentTracks)).join('');
}

function renderSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const results = document.getElementById('searchResults');
    if (!searchTerm) {
        results.innerHTML = '';
        return;
    }
    const filteredTracks = mockTracks.filter(track =>
        track.title.toLowerCase().includes(searchTerm) ||
        track.artist.toLowerCase().includes(searchTerm) ||
        track.album.toLowerCase().includes(searchTerm)
    );
    let html = '';
    if (filteredTracks.length > 0) {
        window._lastRenderedList = filteredTracks;
        html += '<h2>Músicas</h2>';
        html += '<div class="tracks-list">';
        html += filteredTracks.map(t => renderTrackCard(t, filteredTracks)).join('');
        html += '</div>';
    }
    if (filteredTracks.length === 0) {
        html = '<div style="text-align: center; padding: 48px; color: var(--text-secondary);">';
        html += '<h3>Nenhum resultado encontrado</h3>';
        html += '<p>Tente buscar por outro termo</p>';
        html += '</div>';
    }
    results.innerHTML = html;
}

function renderLibrary() {
    const libraryContent = document.getElementById('libraryContent');
    const activeTab = document.querySelector('.library-tab.active').dataset.tab;
    if (activeTab === 'playlists') {
        const allPlaylists = mockPlaylists;
        if (allPlaylists.length > 0) {
            libraryContent.innerHTML = `
                <div class="playlists-grid">
                    ${allPlaylists.map(playlist => `
                        <div class="playlist-card" onclick="renderPlaylistDetails('${playlist.id}')">
                            <img src="${playlist.coverImage}" alt="${playlist.name}" class="playlist-cover">
                            <button class="play-button">
                                <i class="fas fa-play"></i>
                            </button>
                            <h3 class="playlist-name">${playlist.name}</h3>
                            <p class="playlist-description">${playlist.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            libraryContent.innerHTML = `
                <div style="text-align: center; padding: 48px; color: var(--text-secondary);">
                    <h3>Nenhuma playlist criada</h3>
                    <p>Crie sua primeira playlist para começar</p>
                </div>
            `;
        }
    } else {
        if (currentState.library.likedSongs.length > 0) {
            window._lastRenderedList = currentState.library.likedSongs;
            libraryContent.innerHTML = `
                <div class="tracks-list">
                    ${currentState.library.likedSongs.map(t => renderTrackCard(t, currentState.library.likedSongs)).join('')}
                </div>
            `;
        } else {
            libraryContent.innerHTML = `
                <div style="text-align: center; padding: 48px; color: var(--text-secondary);">
                    <h3>Nenhuma música curtida</h3>
                    <p>Curta suas músicas favoritas para vê-las aqui</p>
                </div>
            `;
        }
    }
}

// Funções de navegação
function navigateToPage(pageName) {
    // Esconder todas as páginas
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    // Mostrar a página selecionada
    document.getElementById(pageName + 'Page').classList.add('active');
    
    // Atualizar navegação
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
    
    // Renderizar conteúdo específico da página
    switch (pageName) {
        case 'home':
            renderHome();
            break;
        case 'search':
            renderSearch();
            break;
        case 'library':
            renderLibrary();
            break;
    }
}

// Funções de reprodução
function playTrackInList(trackId, trackList) {
    const idx = trackList.findIndex(t => t.id === trackId);
    if (idx !== -1) {
        currentState.currentPlaylist = { id: 'temp', name: 'Fila Atual', tracks: trackList };
        currentState.currentTrackIndex = idx;
        loadTrack(trackList[idx]);
        playTrack();
    }
}

function playPlaylist(playlistId) {
    const playlist = mockPlaylists.find(p => p.id === playlistId);
    if (playlist && playlist.tracks.length > 0) {
        currentState.currentPlaylist = playlist;
        currentState.currentTrackIndex = 0;
        loadTrack(playlist.tracks[0]);
        playTrack();
    }
}

function toggleLikeById(trackId) {
    const track = mockTracks.find(t => t.id === trackId);
    if (track) {
        const isLiked = currentState.library.likedSongs.some(song => song.id === trackId);
        
        if (isLiked) {
            currentState.library.likedSongs = currentState.library.likedSongs.filter(song => song.id !== trackId);
            showNotification('Removido dos favoritos');
        } else {
            currentState.library.likedSongs.push(track);
            showNotification('Adicionado aos favoritos');
        }
        
        if (currentState.currentTrack && currentState.currentTrack.id === trackId) {
            updateLikeButton();
        }
        
        renderLibrary();
    }
}

// --- MELHORIA NA ÁREA DE PLAYLISTS ---
// Exibir músicas da playlist ao clicar
function renderPlaylistDetails(playlistId) {
    const playlist = mockPlaylists.find(p => p.id === playlistId);
    if (!playlist) return;
    const libraryContent = document.getElementById('libraryContent');
    let html = `<h2>${playlist.name}</h2>`;
    html += `<p style="color:var(--text-secondary);margin-bottom:16px;">${playlist.description}</p>`;
    if (playlist.tracks.length > 0) {
        window._lastRenderedList = playlist.tracks;
        html += '<div class="tracks-list">';
        html += playlist.tracks.map(t => renderTrackCard(t, playlist.tracks)).join('');
        html += '</div>';
    } else {
        html += '<div style="text-align:center;padding:48px;color:var(--text-secondary);">Nenhuma música nesta playlist.</div>';
    }
    html += '<button id="backToPlaylists" style="margin-top:24px;margin-right:12px;">Voltar para Playlists</button>';
    html += `<button id="removePlaylistBtn" style="margin-top:24px;background:#e74c3c;color:#fff;border:none;border-radius:6px;padding:8px 12px;">Remover Playlist</button>`;
    libraryContent.innerHTML = html;
    document.getElementById('backToPlaylists').onclick = renderLibrary;
    document.getElementById('removePlaylistBtn').onclick = function() {
        const idx = mockPlaylists.findIndex(p => p.id === playlistId);
        if (idx !== -1) {
            mockPlaylists.splice(idx, 1);
            showNotification('Playlist removida!');
            renderLibrary();
        }
    };
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Navegação
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            navigateToPage(page);
        });
    });
    
    // Tabs da biblioteca
    document.querySelectorAll('.library-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.library-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderLibrary();
        });
    });
    
    // Controles do player
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', previousTrack);
    nextBtn.addEventListener('click', nextTrack);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    volumeBtn.addEventListener('click', toggleMute);
    likeBtn.addEventListener('click', toggleLike);
    
    // Progress bar
    progressBar.addEventListener('click', seekTo);
    
    // Volume bar
    volumeBar.addEventListener('click', (e) => {
        const rect = volumeBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const newVolume = clickX / width;
        setVolume(newVolume);
    });
    
    // Busca
    searchInput.addEventListener('input', renderSearch);
    
    // Audio events
    audioElement.addEventListener('timeupdate', updateProgress);
    audioElement.addEventListener('loadedmetadata', () => {
        currentState.duration = audioElement.duration;
        totalTimeDisplay.textContent = formatTime(audioElement.duration);
    });
    audioElement.addEventListener('ended', () => {
        if (currentState.repeat === 'one') {
            audioElement.currentTime = 0;
            audioElement.play();
        } else {
            nextTrack();
        }
    });
    
    // Inicializar
    setVolume(currentState.volume);
    renderHome();
    
    // Esconder player inicialmente
    player.style.display = 'none';
});

// Adicionar CSS para notificações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// --- MODAL DE ADICIONAR À PLAYLIST ---
function openPlaylistModal() {
    if (!currentState.currentTrack) return;
    playlistModalList.innerHTML = '';
    if (mockPlaylists.length === 0) {
        playlistModalList.innerHTML = '<p>Nenhuma playlist disponível.</p>';
    } else {
        mockPlaylists.forEach(playlist => {
            const btn = document.createElement('button');
            btn.textContent = playlist.name;
            btn.onclick = () => {
                // Evitar duplicidade
                if (!playlist.tracks.some(t => t.id === currentState.currentTrack.id)) {
                    playlist.tracks.push(currentState.currentTrack);
                    showNotification('Música adicionada à playlist!');
                } else {
                    showNotification('Música já está na playlist!', 'error');
                }
                playlistModal.style.display = 'none';
            };
            playlistModalList.appendChild(btn);
        });
    }
    playlistModal.style.display = 'flex';
}
addToPlaylistBtn.addEventListener('click', openPlaylistModal);
closePlaylistModal.addEventListener('click', () => playlistModal.style.display = 'none');
playlistModal.addEventListener('click', (e) => { if (e.target === playlistModal) playlistModal.style.display = 'none'; });

// --- MODAL DE CRIAR PLAYLIST ---
function openCreatePlaylistModal() {
    newPlaylistName.value = '';
    newPlaylistDesc.value = '';
    createPlaylistModal.style.display = 'flex';
    setTimeout(() => newPlaylistName.focus(), 100);
}
openCreatePlaylistModalBtn.addEventListener('click', openCreatePlaylistModal);
openCreatePlaylistModalBtn2.addEventListener('click', openCreatePlaylistModal);
closeCreatePlaylistModal.addEventListener('click', () => createPlaylistModal.style.display = 'none');
createPlaylistModal.addEventListener('click', (e) => { if (e.target === createPlaylistModal) createPlaylistModal.style.display = 'none'; });

createPlaylistBtn.addEventListener('click', () => {
    const name = newPlaylistName.value.trim();
    const desc = newPlaylistDesc.value.trim();
    if (!name) {
        showNotification('Digite um nome para a playlist!', 'error');
        newPlaylistName.focus();
        return;
    }
    const newId = (Math.max(...mockPlaylists.map(p => parseInt(p.id)), 0) + 1).toString();
    mockPlaylists.push({
        id: newId,
        name,
        description: desc,
        coverImage: 'https://via.placeholder.com/300x300/1db954/ffffff?text=' + encodeURIComponent(name),
        tracks: [],
        createdBy: 'Você'
    });
    createPlaylistModal.style.display = 'none';
    showNotification('Playlist criada!');
    renderLibrary();
});