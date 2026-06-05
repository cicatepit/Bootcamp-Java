const USER = "user";
const PASS = "pass";

const accessButton = document.getElementById("accessButton");
const logoutButton = document.getElementById("logoutButton");
const authBox = document.getElementById("authBox");

if (accessButton) {
    accessButton.addEventListener("click", autenticarUsuario);
}

if (logoutButton) {
    logoutButton.addEventListener("click", mostrarConfirmacionSalida);
}

function autenticarUsuario() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("loginError");

    if (username === USER && password === PASS) {
        window.location.href = "home.html";
    } else {
        loginError.textContent = "Credenciales inválidas.";
    }
}

function mostrarConfirmacionSalida() {
    authBox.innerHTML = `
        <section class="logout-popup">
            <p>¿Cerrar sesión?</p>

            <div class="logout-options">
                <button class="nav-button" id="confirmLogout">
                    CONFIRMAR
                </button>

                <button class="nav-button" id="cancelLogout">
                    CANCELAR
                </button>
            </div>
        </section>
    `;

    document.getElementById("confirmLogout").addEventListener("click", cerrarSesion);
    document.getElementById("cancelLogout").addEventListener("click", volverAlMenu);
}

function cerrarSesion() {
    window.location.href = "index.html";
}

function volverAlMenu() {
    window.location.reload();
}

