const request = function (method, path, body) {
    fetch('http://127.0.0.1:8000' + path, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
        // withCredentials: true,
        // credentials: 'include'
    })
        .then(res => {console.log(res); return res.json()})
        .then(doc => console.log(doc))
        .catch(err => console.log(err));
};

window.signup = () => request('POST', '/user/registration/', {
    username: 'T1',
    email: 't1@gmail.com',
    password1:'novellery',
    password2:'novellery',
});

window.login = () => request('POST', '/login/', {
    email: 't1@gmail.com',
    password:'novellery',
});

window.subscribe = () => request('GET', '/novel.js/61fb1f53-cf19-4986-b426-60e647fd4a73/subscribe');