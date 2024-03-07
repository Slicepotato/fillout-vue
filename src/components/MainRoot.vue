<template>
  <div>
    <h1>Form Responses</h1>
    <button @click="fetchResponses">Fetch Responses</button>
    <div v-if="responses.length > 0">
      <ul>
        <li v-for="response in responses" :key="response.submissionId">
          {{ response.submissionTime }} - {{ response.questions[0].value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      responses: [],
    };
  },
  methods: {
    async fetchResponses() {
      const formId = 'cLZojxk94ous';
      const filters = [
        {
          id: 'nameId',
          condition: 'equals',
          value: 'Timmy',
        },
      ];

      try {
        const response = await axios.get(`https://api.fillout.com/v1/forms/${formId}/filteredResponses`, {
          params: {
            filters: JSON.stringify(filters),
          },
        });

        this.responses = response.data.responses;
      } catch (error) {
        console.error('Error fetching responses:', error);
      }
    },
  },
};
</script>

<style scoped>
</style>
