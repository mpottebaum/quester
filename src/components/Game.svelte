<script lang="ts">
  import type { Question as QuestionType } from '~/types'
  import Rounds from './Rounds.svelte'
  import Question from './Question.svelte'
  export let rounds: QuestionType[][]
  let currentRound = 1
  let question: QuestionType | null = null
  function onCategoryClick(q: QuestionType) {
    question = q
  }
</script>

{#if question}
  <Question {question} />
{:else}
  <Rounds {rounds} {currentRound} {onCategoryClick} />
{/if}
