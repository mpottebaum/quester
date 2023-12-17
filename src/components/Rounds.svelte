<script lang='ts'>
  export let rounds: Question[][];
</script>

<ol>
  {#each rounds as round, i}
    <li>
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
</style>
