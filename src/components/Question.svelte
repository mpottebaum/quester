<script lang="ts">
  import type { Question } from '~/types'
  export let question: Question
  const answerIndex = Math.floor(Math.random() * 4)
  const choices: string[] = [
    ...question.wrong_answers.slice(0, answerIndex),
    question.answer,
    ...question.wrong_answers.slice(answerIndex, 4),
  ]
</script>

<p>{question.question}</p>
<ul>
  {#each choices as choice}
    <button>{choice}</button>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
  }
</style>
