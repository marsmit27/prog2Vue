<template>
  <header>
        <div class="header">
            <nav class="navigation">
                <a href="#" class="navbar-logo">Prono-max</a>
                <div class="navbar-right">
                    <router-link to="/">Accueil</router-link>
                    <router-link to="/contact">Contact</router-link>
                    <router-link to="/connexion">Connexion</router-link>
                    <router-link  to="/inscription">Inscription</router-link>
                </div>
            </nav>
        </div>
  </header>
</template>


<style scoped>
  header {
    width: 100%;
    height: 100px;
    background-color: #1abc9c;}

.navigation {
    padding-top: 30px;
    padding-bottom: 30px;
    
    top: 0;
    width: 100%;
    z-index: 1;
    height: 100px;
}

.navbar-right {
    float: right;
    padding-right: 5%;
    padding-top: 12px;
}

.navbar-right a {
    text-decoration: none;
    padding: 30px;
    color: white;
    font-weight: 500;
    
}

.navbar-logo {
    padding-left: 90px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    text-decoration: none;
}

.btn-inscr {
  background-color:white;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#444;
  font-family:Arial;
  font-weight: 500;
	font-size:13px;
	padding:13px 31px;
  text-decoration:none;
  -webkit-box-shadow: 10px 10px 107px -36px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 107px -36px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 107px -36px rgba(0,0,0,0.75);
  border: none;
  }
</style>