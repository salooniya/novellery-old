window.req = function (method, path, data) {
    fetch('http://127.0.0.1:8000' + path, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: data && JSON.stringify(data),
        credentials: "include"
    })
        .then(res => {
            console.log(res);
            console.log(res.headers.get('Set-Cookie'));
            return res.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        });
};

function delete_cookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

window.signup = () => req('POST', '/user/registration/', {
    "username": "testuser3",
    "email": "testuser3@gmail.com",
    "password1": "novellery",
    "password2": "novellery"
});

window.login = () => req('POST', '/login/', {
    "email": "testuser1@gmail.com",
    "password": "novellery"
});

window.logout = () => {
    req('GET', '/logout/')
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    console.log(document.cookie)
};

window.userme = () => req('GET', '/userme');

window.user = () => req('GET', '/user/1fd623e6-a744-4b81-a160-4a94eafa9c52');

window.novel = () => req('GET', '/novel.js/87627e3b-7df6-4230-a06e-968ba8a8984e/subscribe');