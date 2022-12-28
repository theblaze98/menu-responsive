const header = document.getElementById( 'header' );
const btnOpenNav = document.getElementById( 'btn_open_nav' );
const btnCloseNav = document.getElementById( 'btn_close_nav' );
const nav = document.getElementById( 'nav' );

header.classList.toggle( 'header--scroll', scrollY > 0 );

window.addEventListener( 'scroll', e => header.classList.toggle( 'header--scroll', scrollY > 0 ) );

btnOpenNav.addEventListener( 'click', e => nav.classList.add( 'header__nav--active' ) );

btnCloseNav.addEventListener( 'click', e => nav.classList.remove( 'header__nav--active' ) );
