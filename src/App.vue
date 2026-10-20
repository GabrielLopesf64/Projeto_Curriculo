<script setup>
import BotaoTema from './components/BotaoTema.vue'
import Cabecalho from './components/Cabecalho.vue'
import Experiencias from './components/Experiencias.vue'
import Educacao from './components/Educacao.vue'
import Contato from './components/Contato.vue'
</script>

<template>
  <div class="pagina-completa">
    <BotaoTema />

    <Cabecalho />

    <div class="corpo">
      <main class="principal">
        <section class="descricao animado" style="--i: 1">
          <p>Jovem dinâmico, pontual (quando o capacitor de fluxo permite) e com vasta experiência em
            resolução de paradoxos temporais. Guitarrista talentoso com domínio de técnicas avançadas de
            shredding antes mesmo de serem inventadas. Experiente em lidar com figuras históricas, direção
            defensiva de veículos modificados e skate urbano. Nota: Não me chame de frangote.</p>
        </section>

        <Experiencias />
      </main>

      <aside class="direita">
        <Educacao />
        <Contato />
      </aside>
    </div>

    <footer class="rodape animado" style="--i: 9">
      <p>COPYRIGHT 2026 - TODOS OS DIREITOS RESERVADOS</p>
    </footer>
  </div>
</template>
