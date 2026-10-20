import { ref, watch } from 'vue'

// Estado único compartilhado por todos os componentes
const tema = ref(document.documentElement.dataset.theme === 'escuro' ? 'escuro' : 'claro')

watch(tema, (valor) => {
  document.documentElement.dataset.theme = valor
  try {
    localStorage.setItem('tema', valor)
  } catch (e) {
    // navegador sem acesso ao localStorage: o tema vale só para a sessão
  }
})

export function useTema() {
  const alternarTema = () => {
    tema.value = tema.value === 'escuro' ? 'claro' : 'escuro'
  }
  return { tema, alternarTema }
}
