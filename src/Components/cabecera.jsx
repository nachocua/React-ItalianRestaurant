import "../css/navbar.css";

export default function Cabecera() {
   return (
      <header>
         <nav class="navbar">
            <div class="brand">
               <img src="assets/logo_text.png" alt="logo de Il Materello" />
            </div>
            <div class="switches">
               <div id="flags" class="flags">
                  <div class="flag-item" data-language="es">
                     <img
                        class="flags-img"
                        src="assets/flags/espana.png"
                        alt="esp logo"
                     />
                  </div>
                  <div class="flag-item" data-language="en">
                     <img
                        class="flags-img"
                        src="assets/flags/estados-unidos.png"
                        alt="usa logo"
                     />
                  </div>
               </div>
            </div>
            <div class="actions">
               <span class="burger-menu-line1"></span>
               <span class="burger-menu-line2"></span>
               <span class="burger-menu-line3"></span>
            </div>
         </nav>
      </header>
   );
}
