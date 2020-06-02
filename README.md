# Homenaje a Maikel Llamaret, impulsor del sofware libre en Cuba

Este repositorio contiene un script (`main.js`) que al ser incluido en una página web la 
oscurece y muestra una cinta de luto.

Para incluir la versión hosteada de este script solo tiene que agregar en el HTML de su web lo siguiente:

    <script type="text/javascript" src="https://www.daxslab.com/daxslab/static/llamaret/main.js"></script>

## Personalización

Este script homenaje puede ser perzonalizando declarando una serie de variables de la siguente forma:

    <script type="text/javascript">
        ribbonText = "Hoy y siempre Maikel"; // mensaje que se mostrará en la cinta
        ribbonUrl = "https://github.com/llamaret/"; // url a la que enviará al hacer click en la cinta
        ribbonPosition = ""; // posición de la cinta, los valores pueden ser: "", "right-bottom", "left-top", "left-bottom"
        ribbonFixed = true; // si el valor es true la cinta ocupará una posición fija
        setGrayscale = true; // si el valor es true (por defecto) la web se llevará a escala de grises
        grayscaleValue = "grayscale(1)"; // el valor de escala de grices a utilizar

    </script>
    <script type="text/javascript" src="https://www.daxslab.com/daxslab/static/llamaret/main.js"></script>
