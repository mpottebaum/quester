<script lang="ts">
  import type { Question } from '~/types'
  export let rounds: Question[][];
</script>

<ol class="rounds">
  {#each rounds as round, i}
    <li class="round">
      <h2>Round {i + 1}</h2>
      <ol>
        {#each round as question}
          <li>{question.category}</li>
        {/each}
      </ol>
    </li>
  {/each}
</ol>

<style>
  ol {
    list-style-type: none;
    padding: 0;
    height: 100%;
    display: flex;
  }

  .rounds {
    flex-direction: column;
    align-items: center;
  }

  .round {
    display: flex;
    flex: 1;
  }
</style>
