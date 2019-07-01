// Nav hamburgher
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

// Tab
(function(){
	function onTabClick(event){
		var actives = document.querySelectorAll('.active');

	    // deactivate existing active tab and panel
	    for (var i=0; i < actives.length; i++){
	      	actives[i].className = actives[i].className.replace('active', '');
	    }

	    // activate new tab and panel
	    event.target.parentElement.className += ' active';
	    document.getElementById(event.target.href.split('#')[1]).className += ' active';
	}

	var el = document.getElementById('nav-tab');
	el.addEventListener('click', onTabClick, false);
})();