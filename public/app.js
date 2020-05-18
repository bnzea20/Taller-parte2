var provider = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();
var providergithub = new firebase.auth.GithubAuthProvider();
//jquery sujeta la etiqueta root
$('#login').click(function(){
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result){
            console.log(result.user);
            $('#login').hide();
            $('#root').append(result.user.displayName);
            $('#root').append("<img src='"+result.user.photoURL+"'/>")
        });
});

$('#loginFacebook').click(function(){
    firebase.auth().signInWithPopup(providerFacebook)
        .then(function(result){
            console.log(result.user);
            $('#loginFacebook').hide();
            $('#root').append(result.user.displayName);
            $('#root').append("<img src='"+result.user.photoURL+"'/>")
            guardarDatos(result.user)
        });
});
$('#logingithub').click(function(){
    firebase.auth().signInWithPopup(providergithub)
        .then(function(result){
            console.log(result.user);
            $('#logingithub').hide();
            $('#root').append(result.user.displayName);
            $('#root').append("<img src='"+result.user.photoURL+"'/>")
            guardarDatos(result.user)
        });
});

function guardarDatos(user){
    var usuario= {
        uid     :user.uid,
        nombre  :user.displayName,
        email   :user.email,
        foto    :user.photoURL
    }
    firebase.database().ref("taller5/Usuarios/"+user.uid).set(usuario)
}