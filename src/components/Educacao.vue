<script setup>
const formacao = [
  {
    titulo: '1986 | Hill Valley High School',
    categoria: 'Ensino Médio Completo',
    descricao: 'Foco em Artes e Música'
  },
  {
    titulo: '1955 | Cultural Hill Valley',
    categoria: 'Intercâmbio',
    descricao: 'Estudos intensivos sobre dinâmicas sociais da década de 50 e etiqueta de lanchonetes.'
  },
  {
    titulo: '1985 | Engenharia Aplicada',
    categoria: 'Workshop',
    descricao: 'Treinamento prático em sistemas de 1.21 Gigawatts e mecânica de DeLorean (sob mentoria do Dr. Emmett Brown).'
  },
  {
    titulo: '2015 | Mobilidade Urbana Futurista',
    categoria: 'Treinamento',
    descricao: 'Curso intensivo de pilotagem de Hoverboard em superfícies sólidas (atenção: pranchas não funcionam na água sem potência extra).'
  }
]
</script>

<template>
  <div class="educacao">
    <h3 class="animado" style="--i: 2">EDUCAÇÃO</h3>

    <article class="educacional animado" v-for="(f, i) in formacao" :key="f.titulo" :style="{ '--i': i + 3 }">
      <h4>{{ f.titulo }}</h4>
      <div class="categoria_ed">
        <p>{{ f.categoria }}</p>
      </div>
      <div class="descricao_ed">
        <p>{{ f.descricao }}</p>
      </div>
    </article>
  </div>
</template>
