<!-- 封装排行榜组件的代码 -->

<template>
    <header>
        <h1>ACM Leaderboard</h1>
        <!-- 页面主标题，位于页面顶部 -->
    </header>
    <main>
      <table>
        <thead>
          <tr>
            <th>Place</th>
            <th>School</th>
            <th>Team</th>
            <th>Solved</th>
            <th>Penalty</th>
            <th v-for="problem in problems" :key="problem">
              {{ problem }}
            </th>
            <th>Dirt</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in leaderboard" :key="team.place">
            <td>{{ team.place }}</td>
            <td>{{ team.school }}</td>
            <td>{{ team.teamName }}</td>
            <td>{{ team.solved }}</td>
            <td>{{ team.penalty }}</td>
            <td v-for="(problem, index) in team.problems" :key="index">
              <div class="problem-cell">
                <div class="problem-time">{{ problem.time }}</div>
                <div class="problem-penalty">{{ problem.penalty }}</div>
              </div>
            </td>
            <td>{{ team.dirt }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    leaderboard: {
      type: Array,
      required: true,
      default: () => []
    },
    problems: {
      type: Array,
      required: true,
      default: () => ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
    }
  });
  </script>
  
  <style scoped>
  main {
    max-width: 90%;
    margin: 20px auto;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 1em;
    font-family: Arial, sans-serif;
  }
  
  th, td {
    border: 1px solid #ddd;
    text-align: center;
    padding: 4px;
  }
  
  th {
    background-color: #4e6569;
    color: white;
    border: 2px solid #4E6569;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  tr:hover {
    background-color: #ddd;
  }
  
  .problem-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .problem-time {
    font-size: 0.85em;
    font-weight: bold;
  }
  
  .problem-penalty {
    font-size: 0.85em;
    font-weight: bold;
  }
  </style>
  