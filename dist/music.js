const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	  {
        name: 'Señorita',
        artist: 'Shawn Mendes _ Camila Cabello',
        url: 'http://qiniu.bbsky.xyz/music/Shawn%20Mendes%20_%20Camila%20Cabello%20-%20Se%C3%B1orita.mp3',
        cover: 'http://qiniu.bbsky.xyz/img_music/Se%C3%B1orita.png',
      },
      {
        name: "黑暗森林",
        artist: '雲翼星辰',
        url: 'http://qiniu.bbsky.xyz/music/%E9%9B%B2%E7%BF%BC%E6%98%9F%E8%BE%B0%20-%20%E9%BB%91%E6%9A%97%E6%A3%AE%E6%9E%97%EF%BC%88%E5%8E%9F%E6%9B%B2%EF%BC%9ASchwarzer%20Regen%EF%BC%89.mp3',
        cover: 'http://qiniu.bbsky.xyz/img_music/%E9%BB%91%E6%9A%97%E6%A3%AE%E6%9E%97.png',
      },
      {
        name: 'Living in the Shadows',
        artist: 'Matthew Perryman Jones',
        url: 'http://qiniu.bbsky.xyz/music/Matthew%20Perryman%20Jones%20-%20Living%20in%20the%20Shadows.mp3',
        cover: 'http://qiniu.bbsky.xyz/img_music/Living%20in%20the%20Shadows.png',
      },
	  {
        name: '来自天堂的魔鬼',
        artist: 'G.E.M. 邓紫棋',
        url: 'http://qiniu.bbsky.xyz/music/G.E.M.%20%E9%82%93%E7%B4%AB%E6%A3%8B%20-%20%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC.mp3',
        cover: 'http://qiniu.bbsky.xyz/img_music/%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC.png',
      }
    ]
});