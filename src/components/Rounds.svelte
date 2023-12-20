<script lang="ts">
  import type { Question } from '~/types'
  export let rounds: Question[][]
  export let currentRound = 1
  export let onCategoryClick: (q: Question) => void
</script>

<ol class="rounds">
  {#each rounds as round, i}
    <li class="round">
      <ol>
        {#each round as question}
          <li>
            <button
              on:click={() => onCategoryClick(question)}
              disabled={i + 1 > currentRound}
            >
              <p>{question.category}</p>
            </button>
          </li>
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
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .round > ol {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  button {
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    background-color: var(--theme-primary);
    padding: 0.4rem 1rem;
    border: solid 1px var(--theme-primary);
    width: 100%;
    font-weight: 700;
    font-size: 1rem;
    color: var(--theme-white);
  }

  button:hover {
    opacity: 80%;
  }

  button:disabled {
    cursor: default;
    opacity: 20%;
  }
</style>
