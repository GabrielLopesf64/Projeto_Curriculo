<script setup>
const experiencias = [
  {
    titulo: '1985 - Presente | The Pinheads',
    cargo: 'Guitarrista Principal',
    descricao: "Composição e performance de Rock 'n' Roll. Responsável pela audição da \"Batalha das Bandas\" (mesmo sendo considerado \"barulhento demais\" por alguns juízes)."
  },
  {
    titulo: '1955 – Baile Encanto sob o Mar',
    cargo: 'Músico Substituto (Guitarra)',
    descricao: 'Substituição emergencial do guitarrista Marvin Berry. Responsável pela introdução cultural do gênero Heavy Metal trinta anos antes do previsto.'
  },
  {
    titulo: '1885 – Consultoria de Segurança Hill Valley (Velho Oeste)',
    cargo: 'Assistente de Ferreiro',
    descricao: 'Auxílio técnico em engenharia ferroviária improvisada e mediação de conflitos com a gangue de Buford "Cachorro Louco" Tannen.'
  },
  {
    titulo: '1985 – Indústrias Biffco',
    cargo: 'Sobrevivente Urbano',
    descricao: 'Gestão de crises em ambientes distópicos e recuperação de artefatos esportivos (almanaques) para restauração da ordem cronológica.'
  }
]
</script>

<template>
  <div class="experiencias">
    <h3 class="animado" style="--i: 2">EXPERIÊNCIAS PROFISSIONAIS</h3>

    <article class="cargo animado" v-for="(e, i) in experiencias" :key="e.titulo" :style="{ '--i': i + 3 }">
      <h4>{{ e.titulo }}</h4>
      <div class="nome_cargo">
        <p>{{ e.cargo }}</p>
      </div>
      <div class="descricao_cargo">
        <p>{{ e.descricao }}</p>
      </div>
    </article>
  </div>
</template>
