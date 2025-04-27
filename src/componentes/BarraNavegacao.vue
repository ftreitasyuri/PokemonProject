<template>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar w/ text</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Primeira Geração</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/geracao2">Segunda Geração</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/geracao3">Terceira Geração</RouterLink>
                    </li>
                </ul>

            </div>
        </div>
        <span class="navbar-text m-2">
        PokerDex
      </span>
    </nav>


</template>


<!-- 
<li class="nav-item">
    <RouterLink to="/">Primeira Geracação</RouterLink>
</li>
<li class="nav-item">
    <RouterLink to="/geracao2">Segunda Geração</RouterLink>
</li>
<li class="nav-item">
    <RouterLink to="/geracao3">Terceira Geração</RouterLink>
</li> -->
